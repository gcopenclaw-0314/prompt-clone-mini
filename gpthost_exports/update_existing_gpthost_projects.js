// Update existing GPThost staging projects by pasting new React module code
// (import/export style) via Dashboard → Edit Project → Update Code.
//
// Requires a logged-in Chrome session exposed via CDP at 127.0.0.1:18800.
// Uses manifest_react_modules.json produced by convert_babel_snippets_to_react_modules.js.

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const ROOT = '/home/ubuntu/.openclaw/workspace/prompt-clone-mini';
const EXPORTS_DIR = path.join(ROOT, 'gpthost_exports');
const MANIFEST_PATH = path.join(EXPORTS_DIR, 'manifest_react_modules.json');

const STAGING_ORIGIN = 'https://staging0314.gpthost.online';
const DASH_URL = `${STAGING_ORIGIN}/dashboard`;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function setValueDirect(page, selector, value) {
  const handle = await page.waitForSelector(selector, { timeout: 30000 });
  if (!handle) throw new Error(`Missing selector (waitForSelector returned null): ${selector}`);
  await handle.evaluate((el, val) => {
    // Use the native value setter so React-controlled inputs detect the change.
    const proto = el instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : el instanceof HTMLInputElement
        ? HTMLInputElement.prototype
        : Object.getPrototypeOf(el);
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    const setter = desc && desc.set;
    if (setter) setter.call(el, val);
    else el.value = val;

    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'v' }));
  }, value);
}

async function setValueTyping(page, selector, value) {
  // Kept for cases where key events are required. Prefer setValueDirect for React-controlled inputs.
  await page.waitForSelector(selector, { timeout: 30000 });
  await page.click(selector);
  // Select-all then replace
  const isMac = process.platform === 'darwin';
  await page.keyboard.down(isMac ? 'Meta' : 'Control');
  await page.keyboard.press('KeyA');
  await page.keyboard.up(isMac ? 'Meta' : 'Control');
  await page.keyboard.press('Backspace');
  if (value) await page.type(selector, value, { delay: 10 });
}

async function clickInCard(page, websiteName, ariaLabel) {
  const ok = await page.evaluate((needle, aria) => {
    const h3 = Array.from(document.querySelectorAll('h3')).find(e => (e.textContent || '').trim() === needle);
    if (!h3) return { ok: false, reason: 'project name not found' };
    let card = h3;
    for (let i = 0; i < 12; i++) {
      card = card.parentElement;
      if (!card) break;
      if ((card.className || '').includes('rounded-lg') && (card.className || '').includes('bg-card')) break;
    }
    if (!card) return { ok: false, reason: 'card not found' };
    const btn = Array.from(card.querySelectorAll('button')).find(b => b.getAttribute('aria-label') === aria);
    if (!btn) return { ok: false, reason: `button not found: ${aria}` };
    btn.click();
    return { ok: true };
  }, websiteName, ariaLabel);
  if (!ok.ok) throw new Error(`clickInCard failed for ${websiteName}: ${ok.reason}`);
}

async function clickInDialog(page, buttonText) {
  await page.waitForSelector('[role="dialog"]', { timeout: 30000 });
  const ok = await page.evaluate((t) => {
    const dialog = document.querySelector('[role="dialog"]');
    if (!dialog) return { ok: false, reason: 'dialog missing' };
    const btn = Array.from(dialog.querySelectorAll('button')).find(b => (b.textContent || '').trim() === t);
    if (!btn) return { ok: false, reason: `button missing: ${t}` };
    btn.click();
    return { ok: true };
  }, buttonText);
  if (!ok.ok) throw new Error(`clickInDialog failed: ${ok.reason}`);
}

async function ensureCodeEditorVisible(page) {
  // If code textarea is already visible, do nothing. Otherwise click "Add".
  const selector = '[role="dialog"] textarea[placeholder*="AI Generated code"]';
  const hasCode = await page.evaluate((sel) => !!document.querySelector(sel), selector);
  if (!hasCode) {
    await clickInDialog(page, 'Add');
    await page.waitForSelector(selector, { timeout: 60000 });
  }
}

async function closeAnyDialog(page) {
  const has = await page.evaluate(() => !!document.querySelector('[role="dialog"]'));
  if (!has) return;
  // Click the first visible Close button.
  await page.evaluate(() => {
    const dialog = document.querySelector('[role="dialog"]');
    if (!dialog) return;
    const btn = Array.from(dialog.querySelectorAll('button')).find(b => (b.textContent || '').trim() === 'Close');
    if (btn) btn.click();
  });
}

async function gotoDashboardClean(page) {
  await page.goto(DASH_URL, { waitUntil: 'networkidle2' });
  await page.waitForSelector('input[placeholder="Search projects..."]', { timeout: 60000 });
  // Best-effort wait for the project grid to finish loading.
  try {
    await page.waitForFunction(() => {
      const t = (document.body?.innerText || '');
      return !t.includes('Loading projects');
    }, { timeout: 60000 });
  } catch {}
  // Close any leftover dialog.
  try { await closeAnyDialog(page); } catch {}
}

async function updateOne(page, { websiteName, file }) {
  const code = fs.readFileSync(file, 'utf8');

  await gotoDashboardClean(page);

  // Search for project (React-controlled input: set value directly).
  await setValueDirect(page, 'input[placeholder="Search projects..."]', websiteName);

  // Wait for either the matching card to appear, or an explicit empty state.
  const status = await page.waitForFunction((wn) => {
    const hs = Array.from(document.querySelectorAll('h3')).map(h => (h.textContent || '').trim());
    if (hs.includes(wn)) return { status: 'found' };
    const t = (document.body?.innerText || '').toLowerCase();
    if (t.includes('no projects') || t.includes('no results') || t.includes('not found')) return { status: 'empty' };
    return false;
  }, { timeout: 60000, polling: 500 }, websiteName).then(h => h.jsonValue());

  if (!status || status.status !== 'found') {
    throw new Error(`Project not found in dashboard search: ${websiteName}`);
  }

  // Open edit dialog
  await clickInCard(page, websiteName, 'Edit project');
  await page.waitForSelector('[role="dialog"]', { timeout: 30000 });

  // Ensure code editor shown
  await ensureCodeEditorVisible(page);

  // Fill change summary (the textarea without a placeholder in this dialog)
  await setValueDirect(page, '[role="dialog"] textarea:not([placeholder])', 'Update: convert snippet to React module (import/export)');

  // Fill code
  await setValueDirect(page, '[role="dialog"] textarea[placeholder*="AI Generated code"]', code);

  // Trigger build (button label varies by project/state)
  let buildClicked = false;
  for (const label of ['Build & Deploy Now', 'Build & Deploy', 'Deploy Now']) {
    try {
      await clickInDialog(page, label);
      buildClicked = true;
      break;
    } catch {}
  }

  // Also save (some flows only have Save)
  try { await clickInDialog(page, 'Save Changes'); } catch {}

  if (!buildClicked) {
    console.log(`Note: no explicit build/deploy button found for ${websiteName} (saved changes only).`);
  }

  // Close dialog
  await sleep(800);
  await closeAnyDialog(page);

  // Gentle pacing
  await sleep(800);
}

async function main() {
  let manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

  // Optional: pass websiteName(s) as CLI args to update only specific projects.
  const only = process.argv.slice(2).filter(Boolean);
  if (only.length) {
    const set = new Set(only);
    manifest = manifest.filter(it => set.has(it.websiteName));
    console.log(`Filtering manifest to ${manifest.length} project(s): ${only.join(', ')}`);
  }

  const browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:18800' });
  const pages = await browser.pages();
  let page = pages.find(p => (p.url() || '').startsWith(STAGING_ORIGIN));
  if (!page) page = await browser.newPage();

  page.setDefaultTimeout(60000);
  page.setDefaultNavigationTimeout(120000);

  await page.goto(DASH_URL, { waitUntil: 'networkidle2' });
  await page.waitForSelector('input[placeholder="Search projects..."]', { timeout: 60000 });

  const errors = [];

  for (const item of manifest) {
    console.log(`\n--- Updating project code: ${item.websiteName}`);
    try {
      await updateOne(page, item);
      console.log(`OK: ${item.websiteName}`);
    } catch (e) {
      console.error(`FAILED: ${item.websiteName}`, e);
      errors.push({ websiteName: item.websiteName, error: String(e) });
      // best-effort: close dialog & clear search then continue
      try { await closeAnyDialog(page); } catch {}
      try { await setValueTyping(page, 'input[placeholder="Search projects..."]', ''); } catch {}
      await sleep(1000);
    }
  }

  if (errors.length) {
    console.log(`\nCompleted with ${errors.length} errors:`);
    console.log(JSON.stringify(errors, null, 2));
    process.exitCode = 2;
  } else {
    console.log(`\nDone. Updated ${manifest.length} projects.`);
  }

  await browser.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
