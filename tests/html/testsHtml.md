<!--
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        tests/html/testsHtml.md
SCOPO:       Linee guida per verifiche HTML
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

# HTML checks

## Validazione
- W3C HTML per tutte le pagine (root e partial inclusi).
- Nessun errore di struttura, chiusura tag, attributi duplicati.

## Accessibilita
- Title e meta viewport presenti.
- Attributi `alt` completi per immagini e icone decorative marcate con `aria-hidden="true"` se necessario.
- `aria-label` o `aria-labelledby` per controlli interattivi (nav toggle, lingua, cookie).
- Gerarchia heading coerente (H1 per pagina, poi H2/H3).
- Focus visibile e navigazione tastiera funzionante.

## I18n e contenuti
- Attributo `lang` su `html` aggiornato dalla lingua selezionata.
- Testi dinamici sotto `data-i18n` popolati correttamente per tutte le lingue.
