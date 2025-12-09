<!--
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        docs/contentModel.md
SCOPO:       Descrizione del modello contenuti e dati
VERSIONE:    1.1
DATA:        11/03/2026
AUTORE:      Aumatex srls  |  www.aumatex.it
AMBIENTE:    sviluppo
BUILD:       beta
STACK:       Markdown
REPO:        https://github.com/aumadev/aumatex_it
LICENZA:     Software proprietario © 2025 Aumatex srls
NOTE:        Uso interno. Vietata qualsiasi diffusione o modifica non autorizzata.
───────────────────────────────────────────────────────────────────────────────
-->

# Content model

## Navigazione e pagine
- Navigazione principale in `config/navigation.json`.
- Pagine root condivise (`index.html`, `privacy-policy.html`, `cookie-policy.html`) con testi i18n.
- Sezioni riutilizzabili (hero, card, footer) via partial `src/html/partials/`.
- Homepage con sezioni aggiuntive (pillars, statistiche, CTA) gestite in `index.html` con stili `src/styles/pages/home-sections.css`.

## Localizzazione e dati
- Stringhe UI in `src/locales/<lang>/common.json`.
- Contenuti dinamici (es. card home) in `src/data/content/` con varianti per lingua.
- Dizionari caricati client-side e sincronizzati con select lingua.

## Media
- Immagini, icone, font, audio, video, download in `src/media/` con manifest dettagliato (`docs/mediaManifest.md`).
- Palette temi in `config/themes/palette.json` usata da CSS.

## Temi e stili
- Temi light/dark in `src/styles/themes/`.
- Variabili estetiche e animazioni in `src/styles/base/`.
- Componenti e layout separati per header, footer, card, banner cookie.

## Consenso e compliance
- Banner cookie gestito da `src/scripts/core/cookie-consenso.js` con preferenze essenziali/analisi/marketing e link a policy.

## Automazione
- Pipeline Python da completare per render statico, merge i18n/dati, ottimizzazione asset (`python/tasks/`).
