<!--
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        docs/architecture.md
SCOPO:       Documentazione dell'architettura del template
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

# Architettura del template

## Config e token
- Config-driven con impostazioni in `config/` e palette in `config/themes/`.
- Variabili CSS separate per estetica e animazioni.

## HTML e contenuti
- Layout base in `src/html/layouts`, partial header/footer/componenti in `src/html/partials`.
- Pagine root (`index.html`, `privacy-policy.html`, `cookie-policy.html`) neutre e i18n-driven.
- Contenuti strutturati in `src/data/`, stringhe UI in `src/locales/`.

## CSS a layer
- Base: root, variabili estetiche/animazioni, reset, typo.
- Layout: grid, header, footer.
- Componenti: card, bottoni, form, banner cookie.
- Temi: light/dark.
- Utility e overrides (print, RTL).

## JS a responsabilita
- Core/app: tema, header, consenso cookie.
- i18n loader: caricamento dizionari, sync lingua/select.
- UI: nav mobile/overlay, accordion.
- Form: validation.
- Analytics: tracking base.

## Media e compliance
- Media organizzati per tipo in `src/media/` con manifest dedicato.
- Banner cookie modulare con preferenze persistite e link alle policy.

## Automazione
- Script Python in `python/tasks/` per build e ottimizzazione asset (da completare/estendere).
