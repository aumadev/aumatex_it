# Content model
- **Navigation**: `config/navigation.json` per label e percorsi.
- **Pages**: markup condiviso (`index.html`, `privacy-policy.html` ecc.) con testi localizzati via i18n loader. Contenuto dinamico (card, hero, ecc.) letto da JSON in `src/data/`.
- **Locales**: stringhe UI in `src/locales/<lang>/common.json` per testi ripetuti.
- **Media**: immagini raw/ottimizzate, icone SVG, favicons, video/audio, download.
- **Themes**: token colore in `config/themes/palette.json` e CSS in `src/styles/themes/`.
- **Consenso cookie**: banner e preferenze gestite da `src/scripts/core/cookie-consenso.js` con testi i18n e controlli essenziali/analisi/marketing.
- **Automation**: pipeline Python da completare per rendering e deploy statico.
