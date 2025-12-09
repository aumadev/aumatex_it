<!--
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        readmeMain.md
SCOPO:       Panoramica del template base e principi
VERSIONE:    1.0
DATA:        04/11/2025
AUTORE:      Aumatex srls  |  www.aumatex.it
AMBIENTE:    sviluppo
BUILD:       beta
STACK:       Markdown
REPO:        https://github.com/aumadev/aumatex_it
LICENZA:     Software proprietario © 2025 Aumatex srls
NOTE:        Uso interno. Vietata qualsiasi diffusione o modifica non autorizzata.
───────────────────────────────────────────────────────────────────────────────
-->

# Aumatex HTML Starter
Starter per siti statici multipagina e multilingua, con HTML modulare, CSS a layer, JS componentizzato e pipeline dati/media.

## Struttura del progetto
Percorso | Contenuto
--- | ---
config/ | Configurazioni, token e palette
docs/ | Documentazione architettura, contenuti, manifest media
python/ | Task e utility di automazione
src/html/ | Layout e partial riutilizzabili
src/styles/ | CSS base, variabili, componenti, temi, utility
src/scripts/ | JS core, UI, i18n, form, analytics, consenso cookie
src/data/ | JSON per contenuti e navigazione
src/locales/ | Testi localizzati per lingua
src/media/ | Immagini, icone, font, audio, video, download
index.html | Homepage neutra i18n-ready
privacy-policy.html | Pagina privacy i18n-ready
cookie-policy.html | Pagina cookie i18n-ready
tests/ | Checklist test HTML/CSS/JS

## Guiding principles
- Ogni responsabilità in una cartella dedicata; pagine root neutre e i18n-driven.
- CSS a layer: base (root, variabili estetiche/animazioni, reset, typo), layout, componenti, temi light/dark, utility.
- JS modulare: core/app, i18n, UI (nav/accordion), form validation, analytics, consenso cookie.
- Dati separati da testi: contenuti in `src/data/`, stringhe UI in `src/locales/<lang>/common.json`.
- Asset ordinati: immagini ottimizzate, icone, font, media scaricabili con manifest dedicato.

## Flussi di lavoro consigliati
- Popola layout/partial con markup reale e collega i CSS/JS modulari.
- Integra un task runner (Python o Node) per build, minify e merge i18n/dati.
- Aggiungi lint e test di accessibilità/HTML/CSS/JS sotto `tests/`.
