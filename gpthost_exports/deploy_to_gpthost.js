// Deploy all generated GPThost snippets by automating the logged-in staging session.
// Connects to the already-running OpenClaw Chrome instance (CDP port 18800).

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const ROOT = '/home/ubuntu/.openclaw/workspace/prompt-clone-mini';
const MANIFEST_PATH = path.join(ROOT, 'gpthost_exports/manifest.json');
const OUT_PATH = path.join(ROOT, 'gpthost_exports/deploy_links.json');

const STAGING_ORIGIN = 'https://staging0314.gpthost.online';
const UPLOAD_URL = `${STAGING_ORIGIN}/upload`;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function setValueDirect(page, selector, value) {
  await page.waitForSelector(selector, { timeout: 30000 });
  await page.evaluate((sel, val) => {
    const el = document.querySelector(sel);
    if (!el) throw new Error(`Missing selector: ${sel}`);

    // Use the native value setter so React-controlled inputs detect the change.
    const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype :
                  el instanceof HTMLInputElement ? HTMLInputElement.prototype :
                  Object.getPrototypeOf(el);
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    const setter = desc && desc.set;
    if (setter) {
      setter.call(el, val);
    } else {
      el.value = val;
    }

    // Dispatch input/change
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    // Some UIs validate on keyup
    el.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: 'v' }));
  }, selector, value);
  await page.waitForFunction((sel, val) => {
    const el = document.querySelector(sel);
    return el && el.value === val;
  }, { timeout: 10000 }, selector, value);
}

async function setValueTyping(page, selector, value) {
  await page.waitForSelector(selector, { timeout: 30000 });
  await page.click(selector, { clickCount: 3 });
  await page.keyboard.press('Backspace');
  await page.type(selector, value, { delay: 10 });
  await page.waitForFunction((sel, val) => {
    const el = document.querySelector(sel);
    return el && el.value === val;
  }, { timeout: 10000 }, selector, value);
}

async function clickButtonByText(page, text) {
  await page.waitForFunction((t) => {
    return Array.from(document.querySelectorAll('button')).some(b => (b.textContent || '').trim() === t);
  }, { timeout: 30000 }, text);

  const clicked = await page.evaluate((t) => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => (b.textContent || '').trim() === t);
    if (!btn) return false;
    btn.click();
    return true;
  }, text);

  if (!clicked) throw new Error(`Button not found: ${text}`);
}

async function main() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

  function persist(results) {
    fs.writeFileSync(OUT_PATH, JSON.stringify(results, null, 2));
  }

  // If we already have some deployed links, skip redeploying those names.
  let already = new Set();
  if (fs.existsSync(OUT_PATH)) {
    try {
      const prev = JSON.parse(fs.readFileSync(OUT_PATH, 'utf8'));
      for (const it of prev) if (it?.websiteName) already.add(it.websiteName);
    } catch {}
  }

  const browser = await puppeteer.connect({ browserURL: 'http://127.0.0.1:18800' });

  // Prefer an existing page on the staging origin if present.
  const pages = await browser.pages();
  let page = pages.find(p => (p.url() || '').startsWith(STAGING_ORIGIN));
  if (!page) page = await browser.newPage();

  page.setDefaultTimeout(60000);
  page.setDefaultNavigationTimeout(120000);

  const results = fs.existsSync(OUT_PATH) ? JSON.parse(fs.readFileSync(OUT_PATH, 'utf8')) : [];

  for (const item of manifest) {
    const { websiteName } = item;
    if (already.has(websiteName)) {
      console.log(`\n--- Skipping (already deployed): ${websiteName}`);
      continue;
    }

    const publicUrl = `https://${websiteName}.gpthost.online`;

    try {
      const filePath = item.file;
      const code = fs.readFileSync(filePath, 'utf8');

      console.log(`\n--- Deploying: ${websiteName}`);

      await page.goto(UPLOAD_URL, { waitUntil: 'networkidle2' });

      // Selectors based on placeholders seen in the UI.
      const nameSel = 'input[placeholder="Your Website Name"]';
      const codeSel = 'textarea[placeholder^="Paste your HTML"]';

      // Website name field seems to trigger validation on key events; use typing.
      await setValueTyping(page, nameSel, websiteName);

      // Wait for name validation message to appear.
      // IMPORTANT: the UI uses different phrasing for taken names ("<name> is already taken")
      // vs available names ("<name>.gpthost.online is available"). So we only wait for the
      // name (or common validation keywords), not necessarily the full domain.
      try {
        await page.waitForFunction((wn) => {
          const text = (document.body?.innerText || '').toLowerCase();
          const n = (wn || '').toLowerCase();
          return (
            (n && text.includes(n)) ||
            text.includes('is available') ||
            text.includes('already taken') ||
            text.includes('not available') ||
            text.includes('invalid')
          );
        }, { timeout: 60000 }, websiteName);
      } catch (e) {
        const debugAfter = await page.evaluate((sel) => {
          const el = document.querySelector(sel);
          return {
            value: el ? el.value : null,
            url: location.href,
            text: (document.body?.innerText || '').slice(0, 800)
          };
        }, nameSel);
        console.log('nameValidationTimeoutDebug', JSON.stringify(debugAfter));
      }

      const availability = await page.evaluate(() => {
        const text = (document.body?.innerText || '').toLowerCase();
        const saysAvailable = text.includes('is available');
        const saysTaken = text.includes('already taken') || text.includes('not available');
        if (saysTaken) return false;
        if (saysAvailable) return true;
        return false;
      });

      if (!availability) {
        console.log(`Name not available (already exists?) — recording link and continuing: ${publicUrl}`);
        results.push({ websiteName, url: publicUrl, note: 'name_not_available' });
        persist(results);
        already.add(websiteName);
        continue;
      }

      // Set textarea via direct assignment for speed (typing long text is slow).
      await page.waitForSelector(codeSel);
      await setValueDirect(page, codeSel, code);

      // Wait for button to become enabled
      await page.waitForFunction(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent?.trim() === 'Deploy Code');
        return btn && !btn.disabled;
      }, { timeout: 60000 });

      await clickButtonByText(page, 'Deploy Code');

      // Wait for redirect to dashboard (or capture an error message and keep going).
      try {
        await page.waitForFunction(() => location.pathname.startsWith('/dashboard'), { timeout: 120000 });
      } catch (e) {
        const dbg = await page.evaluate(() => {
          const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent?.trim() === 'Deploy Code');
          const textarea = document.querySelector('textarea');
          return {
            url: location.href,
            pathname: location.pathname,
            btnDisabled: btn ? !!btn.disabled : null,
            codeLen: textarea ? (textarea.value || '').length : null,
            bodyText: (document.body?.innerText || '').slice(0, 800)
          };
        });
        console.log('postDeployTimeoutDebug', JSON.stringify(dbg));
        results.push({ websiteName, url: publicUrl, note: 'deploy_timeout', debug: dbg });
        persist(results);
        already.add(websiteName);
        continue;
      }

      results.push({ websiteName, url: publicUrl });
      persist(results);
      already.add(websiteName);
      console.log(`Deployed: ${publicUrl}`);

      // Gentle pacing to avoid rate limits.
      await sleep(800);
    } catch (err) {
      console.error(`Error deploying ${websiteName}:`, err);
      let dbg = null;
      try {
        dbg = await page.evaluate(() => ({
          url: location.href,
          pathname: location.pathname,
          bodyText: (document.body?.innerText || '').slice(0, 800)
        }));
      } catch {}

      results.push({ websiteName, url: publicUrl, note: 'deploy_error', error: String(err), debug: dbg });
      persist(results);
      already.add(websiteName);
      // Continue with the next item.
      continue;
    }
  }

  persist(results);
  console.log(`\nDone. Wrote ${results.length} links to ${OUT_PATH}`);

  await browser.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
