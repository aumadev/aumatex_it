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
VERSIONE:    1.1
DATA:        09/03/2026
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
- Pagine root (`index.html`, `privacyPolicy.html`, `cookiePolicy.html`) neutre e i18n-driven.
- Header principale replicato dai partial in `src/html/partials/header/nav.html` con brand i18n (`Aumatex`) e toggle tema (`header.themeToggle`).
- Contenuti strutturati in `src/data/`, stringhe UI in `src/locales/`.

## CSS a layer
- Base: root, variabili estetiche/animazioni, reset, typo.
- Layout: grid, header, footer (header sticky con variabili `--spazioHeaderVerticale`, `--dimensioneLogoPrincipale`, animazione `--animazioneHeaderScroll`).
- Componenti: card, bottoni, form, banner cookie.
- Temi: light/dark.
- Utility e overrides (print, RTL).

## JS a responsabilita
- Core/app: gestione tema; consenso cookie in `src/scripts/core/cookie-consenso.js` con stato persistito (`cookieConsent`).
- UI: header sticky/compatto (`src/scripts/ui/headerController.js`), nav mobile/overlay, accordion.
- i18n loader: caricamento dizionari, sync lingua/select.
- Form: validation.
- Analytics: tracking base.

## Media e compliance
- Media organizzati per tipo in `src/media/` con manifest dedicato.
- Banner cookie modulare con preferenze persistite e link alle policy; pulsante di chiusura dedicato e classi `cookieBannerCompatto`/`cookieBannerNascosto`.

## Comportamenti interattivi
- Header: sticky e riallineato su scroll con classe `headerCompatto` applicata oltre la soglia `data-header-soglia`; transizioni guidate da `--animazioneHeaderScroll` e dimensioni da variabili dedicate.
- Cookie banner: markup condiviso nelle pagine root, stile in `src/styles/components/banner-cookie.css` con transizione `--animazioneCookieBanner`; logica in `cookie-consenso.js` che salva preferenze (`preferenzeCookie`) e stato (`cookieConsent`) gestendo pulsanti Personalizza/Accetta/Rifiuta/Chiudi.

## Automazione
- Script Python in `python/tasks/` per build e ottimizzazione asset (da completare/estendere).
