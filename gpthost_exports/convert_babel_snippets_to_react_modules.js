// Convert existing GPThost "text/babel" React snippets (wrapped in script tags)
// into modern React module snippets that start with `import` and end with `export`.
//
// Input:  gpthost_exports/manifest.json (item.file points to current snippet html)
// Output: gpthost_exports/react_modules/<same-basename>.jsx
//         gpthost_exports/manifest_react_modules.json

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..'); // prompt-clone-mini/
const EXPORTS_DIR = path.join(ROOT, 'gpthost_exports');
const MANIFEST_PATH = path.join(EXPORTS_DIR, 'manifest.json');
const OUT_DIR = path.join(EXPORTS_DIR, 'react_modules');
const OUT_MANIFEST_PATH = path.join(EXPORTS_DIR, 'manifest_react_modules.json');

function extractBabelBlock(html) {
  const m = html.match(/<script[^>]*type=\"text\/babel\"[^>]*>([\s\S]*?)<\/script>/i);
  if (!m) return null;
  return m[1];
}

function detectHooksFromDestructure(code) {
  const m = code.match(/const\s*\{\s*([^}]+)\s*\}\s*=\s*React\s*;/);
  if (!m) return [];
  return m[1]
    .split(',')
    .map(s => s.trim())
    .map(s => s.replace(/\s+as\s+.+$/i, '').trim())
    .filter(Boolean)
    .filter(x => /^use[A-Za-z0-9_]+$/.test(x));
}

function stripRuntimeBoilerplate(code) {
  let out = code;

  // Remove React/ReactDOM destructuring lines
  out = out.replace(/^\s*const\s*\{\s*[^}]+\s*\}\s*=\s*React\s*;\s*$/gm, '');
  out = out.replace(/^\s*const\s*\{\s*createRoot\s*\}\s*=\s*ReactDOM\s*;\s*$/gm, '');

  // Remove createRoot + render lines
  out = out.replace(/^\s*const\s+root\s*=\s*createRoot\([^\n]*\);\s*$/gm, '');
  out = out.replace(/^\s*root\.render\([^\n]*\);\s*$/gm, '');

  // Some variants
  out = out.replace(/^\s*ReactDOM\.createRoot\([^\n]*\)\.render\([^\n]*\);\s*$/gm, '');

  // Trim leading/trailing blank lines
  out = out.replace(/^[\s\n]+/, '').replace(/[\s\n]+$/, '');

  return out;
}

function detectPrimaryComponentName(code) {
  // Prefer `const Name =` pattern
  let m = code.match(/\bconst\s+([A-Za-z0-9_]+)\s*=\s*\(/);
  if (m) return m[1];
  m = code.match(/\bconst\s+([A-Za-z0-9_]+)\s*=\s*\(\)\s*=>/);
  if (m) return m[1];
  // function Name() {}
  m = code.match(/\bfunction\s+([A-Za-z0-9_]+)\s*\(/);
  if (m) return m[1];
  // fallback
  return 'App';
}

function buildModule({ code, hooks, componentName }) {
  const importLine = hooks.length
    ? `import React, { ${Array.from(new Set(hooks)).sort().join(', ')} } from "react";`
    : 'import React from "react";';

  return [
    importLine,
    '',
    code.trim(),
    '',
    `export default ${componentName};`,
    ''
  ].join('\n');
}

function main() {
  if (!fs.existsSync(MANIFEST_PATH)) throw new Error(`Missing manifest: ${MANIFEST_PATH}`);
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const outManifest = manifest.map((item) => {
    const html = fs.readFileSync(item.file, 'utf8');
    const babel = extractBabelBlock(html);
    if (!babel) {
      throw new Error(`No <script type="text/babel"> found in ${item.file}`);
    }

    const hooks = detectHooksFromDestructure(babel);
    const stripped = stripRuntimeBoilerplate(babel);
    const componentName = detectPrimaryComponentName(stripped);
    const moduleCode = buildModule({ code: stripped, hooks, componentName });

    const base = path.basename(item.file).replace(/\.[^.]+$/, '');
    const outFile = path.join(OUT_DIR, `${base}.jsx`);
    fs.writeFileSync(outFile, moduleCode);

    return {
      ...item,
      file: outFile
    };
  });

  fs.writeFileSync(OUT_MANIFEST_PATH, JSON.stringify(outManifest, null, 2));

  console.log(`Wrote ${outManifest.length} React module snippets to: ${OUT_DIR}`);
  console.log(`Wrote manifest: ${OUT_MANIFEST_PATH}`);
}

main();
