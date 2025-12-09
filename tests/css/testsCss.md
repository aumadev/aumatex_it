<!--
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        tests/css/testsCss.md
SCOPO:       Linee guida per verifiche CSS
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

# CSS checks

## Struttura e lint
- Linting per layer (base, layout, componenti, temi, utility, overrides) con naming coerente.
- Nessuna regola orfana o duplicata; niente !important non motivati.

## Variabili e temi
- Uso esclusivo di variabili definite in `src/styles/base/variabili-*`.
- Temi light/dark coerenti: colori di testo sfondo e accent senza conflitti.
- Verifica contrasto (WCAG) per link, bottoni, banner.

## Responsive e layout
- Header/nav responsivo (desktop inline, mobile overlay).
- Grid e card fluidi con gap costanti (`spazio-*`).
- Banner cookie e footer centrati e leggibili su mobile.
