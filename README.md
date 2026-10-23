# core-cc.com

Website von **CORE. Consulting & Coaching** (Kim Burzan) – One-Pager mit Impressum und Datenschutz, Deutsch und Englisch.
Statisches HTML/CSS ohne Build-Schritt, kein JavaScript, keine Cookies, keine externen Abfragen.

Workflow: **Claude → GitHub → Server bei comvos**. Jeder Push auf `main` wird per GitHub Actions (`.github/workflows/deploy.yml`, rsync) nach `/home/corecc/public_html/` übertragen.

## Seiten

| Deutsch             | Englisch                 | Datei                                     |
| ------------------- | ------------------------ | ----------------------------------------- |
| `/`                 | `/en/`                   | `index.html` · `en/index.html`            |
| `/impressum.html`   | `/en/legal-notice.html`  | `impressum.html` · `en/legal-notice.html` |
| `/datenschutz.html` | `/en/privacy.html`       | `datenschutz.html` · `en/privacy.html`    |
| 404                 |                          | `404.html` (zweisprachig)                 |

Alle Links zeigen direkt auf die `.html`-Dateien – das funktioniert auf jedem Server. Die `.htaccess` liefert zusätzlich kurze Adressen ohne Endung aus (`/impressum`), leitet die alten WordPress-Adressen `/impressum/` und `/datenschutz/` um und zeigt bei unbekannten Adressen die `404.html`. Der cPanel-Block in der `.htaccess` bleibt unverändert. `vercel.json` gilt nur, falls die Seite zusätzlich über Vercel läuft.

## Gestaltung

**Farben**

| Token     | Wert      | Einsatz                             |
| --------- | --------- | ----------------------------------- |
| `--ink`   | `#374145` | Dunkelgrau – Schrift, Kontaktband   |
| `--paper` | `#dddfe0` | Hellgrau – Seitenhintergrund        |

**Schrift:** Roboto (variabel 100–900), lokal unter `assets/fonts/` – dieselbe Datei wie auf der bisherigen Seite.

**Typo-Skala Major Third (1.25) mit `clamp()`:** Endwert ab 1600 px Viewport, Minimum bei 360 px (Minor Third 1.2), dazwischen fließend.

| Element | Desktop (Vorgabe) | Mobil (360 px) | CSS-Variable |
| ------- | ----------------- | -------------- | ------------ |
| h1      | 3.815rem          | 2.986rem       | `--fs-h1`    |
| h2      | 3.052rem          | 2.488rem       | `--fs-h2`    |
| h3      | 2.441rem          | 2.074rem       | `--fs-h3`    |
| h4      | 1.953rem          | 1.728rem       | `--fs-h4`    |
| h5      | 1.563rem          | 1.44rem        | `--fs-h5`    |
| h6      | 1.25rem           | 1.2rem         | `--fs-h6`    |
| p       | 1rem              | 1rem           | `--fs-p`     |
| small   | 0.8rem            | 0.8rem         | `--fs-small` |
| xs      | 0.64rem           | 0.64rem        | `--fs-xs`    |

Die Abstände (`--s-2` … `--s6`) folgen weiter der √2-Skala. Für Größe unabhängig vom Tag gibt es die Klassen `.h1` … `.h6`, `.small`, `.xs`.
Unter 360 px Breite wird der Claim zusätzlich an die Breite gekoppelt, damit nichts überläuft.

## Inhalte pflegen

- Texte stehen direkt in den HTML-Dateien. Bei Änderungen immer **beide Sprachen** anpassen.
- Kopf und Fuß (Logo, Sprachwahl, Kontaktband, Links zu Impressum/Datenschutz) sind in jeder Seite enthalten – Änderungen dort in allen sieben Dateien nachziehen. Interne Links immer mit `.html` bzw. `/en/` schreiben.
- Nach CSS-Änderungen die Versionsnummer `style.css?v=…` in den Seiten erhöhen, damit Browser die neue Datei laden.
- Porträt: `assets/img/kim-burzan-{480,720,960,1200,1377}.{avif,webp}` (freigestellt, transparent). Neue Fotos in denselben Breiten ablegen.

## Deployment

- Produktion: GitHub Actions → rsync → comvos (Zugangsdaten als GitHub-Secrets `SFTP_*`, `SSH_KNOWN_HOSTS`). Ausgeschlossene Dateien stehen in `.rsyncignore`.
- Optional Vercel (Vorschau): Repo in Vercel importieren, Framework Preset **Other**, Build Command und Output Directory leer lassen.
