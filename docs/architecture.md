# Architettura del template
- **Config-driven**: impostazioni in `config/` e token colore in `config/themes/`.
- **HTML modulare**: layout base in `src/html/layouts`, partial per header/footer/componenti in `src/html/partials`, pagine principali in root (`index.html`, `privacy-policy.html`) con testi gestiti via i18n.
- **CSS a layer**: base (root, variabili estetiche, variabili animazioni, reset, typo), layout, componenti, temi light/dark, utility, overrides.
- **JS a responsabilita**: core/app, i18n loader, UI (nav/accordion), forms (validation), analytics (tracking).
- **Contenuti**: dati JSON in `src/data/`, testi in `src/locales/`, media in `src/media/`.
- **Compliance**: banner cookie modulare con preferenze persistite in localStorage e link alle policy dedicate.
- **Automazione**: script Python in `python/tasks/` per build, ottimizzazione asset e merging dati/lingue.
