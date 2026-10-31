# Grafitecture-Feld · Kit v1.2

Das Feld für jede Website, die **Grafitecture – Marken mit KI.** entworfen hat, technisch betreut und weiterentwickelt. Es steht **immer ganz unten in Impressum und Datenschutz** und verlinkt auf **https://www.grafitecture.de/** (mit www, immer in neuem Fenster).

```
┌───────────────────────────────────────────────┐  Fläche Lime #dafd55
│ Entworfen, technisch betreut und              │
│ weiterentwickelt von                          │
│ grafitecture                                  │  Logo #435960
│ ───────────────────────────────────────────── │  Linie weiß
│ Marken                                        │
│ mit KI.                 www.grafitecture.de → │
└───────────────────────────────────────────────┘
```

## Dateien

| Datei | Inhalt |
| --- | --- |
| `grafitecture-credit.css` | Gestaltung des Feldes (Pflicht) |
| `grafitecture-credit.mjs` | `grafitectureCredit(lang)` → HTML-String, für Websites mit JavaScript-Build (Node, Astro, Next, eigene Generatoren) |
| `snippet.de.html`, `snippet.en.html`, `snippet.fr.html` | fertiges HTML zum Einfügen (WordPress/Elementor, Python-Builds, reines HTML) |
| `grafitecture.svg` | Wortmarke, Farbe über `currentColor` |
| `demo.html` | Vorschau aller Sprachen und Breiten im Browser öffnen |
| `snippets.mjs` | erzeugt Schnipsel und Vorschau neu: `node snippets.mjs` |

## Einbinden

1. Den Ordner `grafitecture-credit/` ins Projekt kopieren (bei L’ANNÉE: `kit/grafitecture-credit/`).
2. `grafitecture-credit.css` mit ins Stylesheet der Website nehmen (anhängen oder als eigene Datei laden).
3. Das Feld als **letztes Element des Inhalts** von Impressum und Datenschutz einsetzen, direkt vor der Fußzeile:

   ```js
   import { grafitectureCredit } from './kit/grafitecture-credit/grafitecture-credit.mjs';
   html += grafitectureCredit('de'); // 'de' | 'en' | 'fr'
   ```

   Ohne JavaScript-Build: den Inhalt von `snippet.de.html` (bzw. `en`, `fr`) an dieselbe Stelle kopieren.

Das Feld ist höchstens 25.2rem (403 px) breit, in schmaleren Spalten nimmt es deren Breite an; Schriftgrößen und Abstände richten sich nach seiner eigenen Breite (Container-Einheiten). Es funktioniert auf weißen und auf dunklen Seiten.

Stellschrauben (optional, auf einem Elternelement setzen):

- `--gt-credit-space`: Abstand nach oben (Standard `4rem`)
- `--gt-credit-font`: Schrift (Standard: die Textschrift der Website)
- `--gt-credit-max`: größte Breite (Standard `25.2rem`)

## Regeln

- Link immer `https://www.grafitecture.de/` mit www, `target="_blank" rel="noopener"`. Das ganze Feld ist klickbar, es ist aber nur ein Link; Screenreader lesen „www.grafitecture.de (öffnet in neuem Fenster)“.
- Farben wie auf grafitecture.de: Fläche Lime #dafd55 im vollen Ton, Schrift und Logo #435960 (Kontrast 6,4 : 1), Linie auf der Fläche weiß. Beim Darüberfahren werden Logo und Link weiß, der Pfeil rückt 4 px nach rechts (bei „Bewegung reduzieren“ nicht). Eckig, nichts unterlegt.
- Die Farben gehören zu Grafitecture, nicht zur Website, in der das Feld steht. Hat eine Kundenseite eine eigene Farbregel (z. B. „nur Grün“ bei L’ANNÉE), ist das Feld die bewusste Ausnahme.
- Slogan wie auf grafitecture.de, Umbruch nach dem ersten Wort: „Marken / mit KI.“, „Brands / with AI.“; Französisch „Des marques / avec l’IA.“.
- Kein Skript, kein Inline-Style, keine externen Requests: eine Content-Security-Policy mit `'self'` reicht.
- Andere Sprachen fallen auf Englisch zurück. Einzelne Texte lassen sich überschreiben: `grafitectureCredit('de', { lead: '…' })`.

## Texte

| | Deutsch | Englisch | Französisch |
| --- | --- | --- | --- |
| Satz | Entworfen, technisch betreut und weiterentwickelt von | Designed, maintained and continually developed by | Conçu, maintenu et développé en continu par |
| Slogan | Marken mit KI. | Brands with AI. | Des marques avec l’IA. |
| Link | www.grafitecture.de | www.grafitecture.de | www.grafitecture.de |
| Bereich (Screenreader) | Über diese Website | About this website | À propos de ce site |

## Eingebaut in

| Website | Repo | Version | Wie |
| --- | --- | --- | --- |
| L’ANNÉE (lannee.de, später 1898.ma) | grafitecture/lannee_webseite | 1.2 | Modul + CSS aus diesem Ordner |
| raumrent.de | grafitecture/raumrent | 1.2 | `snippet.de.html` in `impressum/` und `datenschutz/`, CSS als Abschnitt 14 in `assets/css/site.css` |

Bei einer neuen Version alle Websites in dieser Liste nachziehen.

## Versionen

- v1.2 (31.10.2026): noch einmal 30 % kleiner, höchstens 25.2rem (403 px) breit; Schriften bleiben bei mindestens 13 px
- v1.1 (31.10.2026): Feld insgesamt kleiner, höchstens 36rem breit (vorher volle Spaltenbreite, bei L’ANNÉE 768 px)
- v1 (31.10.2026): erste Fassung

## Ändern

Änderungen am Feld hier im Kit machen, `node snippets.mjs` laufen lassen, die Version im Kopf von CSS, Modul und README hochzählen und den Ordner in die anderen Projekte kopieren.
