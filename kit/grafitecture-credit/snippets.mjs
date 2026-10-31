/**
 * Schreibt die fertigen HTML-Schnipsel snippet.{de,en,fr}.html und die Vorschau demo.html
 * neben diese Datei:  node snippets.mjs
 */
import { writeFile } from 'node:fs/promises';
import { grafitectureCredit, GT_CREDIT_TEXT } from './grafitecture-credit.mjs';

const out = (name) => new URL(`./${name}`, import.meta.url);

for (const lang of Object.keys(GT_CREDIT_TEXT)) {
  const head = `<!-- Grafitecture-Feld (${lang}) · Kit v1.2 · ganz unten in Impressum und Datenschutz einfügen; CSS: grafitecture-credit.css -->\n`;
  await writeFile(out(`snippet.${lang}.html`), head + grafitectureCredit(lang) + '\n');
  console.log(`✓ snippet.${lang}.html`);
}

const box = (label, width, lang) =>
  `<figure style="width:min(${width}px,100%)"><figcaption>${label}</figcaption>${grafitectureCredit(lang)}</figure>`;

const demo = `<!doctype html>
<html lang="de">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Grafitecture-Feld · Vorschau</title>
<link rel="stylesheet" href="grafitecture-credit.css">
<style>
  body { margin: 0; font-family: system-ui, sans-serif; color: #435960; background: #fff; }
  section { display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start; padding: 48px; }
  section.dark { background: #132a13; color: #fff; }
  figure { margin: 0; --gt-credit-space: 0; }
  figcaption { margin-bottom: 12px; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; }
</style>
<section>${box('Deutsch · 768 px', 768, 'de')}${box('Deutsch · Handy 358 px', 358, 'de')}</section>
<section class="dark">${box('Englisch · auf dunkler Seite', 768, 'en')}${box('Französisch · 520 px', 520, 'fr')}</section>
<section>${box('Deutsch · 1200 px', 1200, 'de')}</section>
</html>
`;
await writeFile(out('demo.html'), demo);
console.log('✓ demo.html');
