<!--
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        tests/js/testsJs.md
SCOPO:       Linee guida per verifiche JavaScript
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

# JS checks

## Qualita e lint
- Linting per moduli core/ui/forms/analytics con regole uniformi.
- Nessun uso di var o global non necessario; funzioni in italiano camelCase.

## Interazioni UI
- Toggle nav mobile: apertura/chiusura overlay, blocco scroll body, chiusura su click link/overlay.
- Accordion: apertura/chiusura mirata sugli elementi target.
- Theme toggle: persistenza in localStorage e applicazione data-theme.

## Localizzazione e dati
- i18n loader: caricamento dizionari, sync select lingua, aggiorna `lang` su html.
- Loader contenuti: render card da JSON per ogni lingua senza errori fetch.

## Form e consenso
- Validation: blocco submit se campi required vuoti, aria-invalid coerente.
- Consenso cookie: preferenze salvate, stati compresso/espanso funzionanti, riapertura dal footer.
