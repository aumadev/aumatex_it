# Aumatex HTML Starter
Starter template for multi-page, multi-language static sites. It is structured for granular HTML partials, modular CSS, componentized JS, and supporting data/media pipelines.

## Layout rapido delle cartelle
```
config/              # Configurazioni e token di design
docs/                # Documentazione architetturale
python/              # Utility di build/automazione
src/html/            # Layout e partials riutilizzabili
src/styles/          # CSS modulare per base, variabili, componenti, temi
src/scripts/         # JS modulare (core, UI, analytics, forms)
src/data/            # Dati JSON per navigazione e contenuti
src/locales/         # Testi localizzati per lingue
src/media/           # Asset (img, video, audio, font, download)
index.html           # Homepage (root, i18n-driven)
privacy-policy.html  # Pagina privacy (root, i18n-driven)
tests/               # Punti di verifica per HTML/CSS/JS
```

## Guiding principles
- Ogni responsabilità in una cartella dedicata (HTML, CSS, JS, dati, media). Pagine root sono neutre e guidate da i18n.
- CSS spezzato per base (root, variabili estetiche e animazioni), layout, componenti, temi e utility. Tutti i valori ricorrenti passano da variabili CSS.
- JS suddiviso per core/app, UI, analytics e form handling.
- Config e token in JSON per riuso cross-stack; stringhe localizzate in `src/locales/<lang>/common.json` e contenuti in `src/data/content/*`.

## Prossimi passi suggeriti
- Popolare layout e partial con markup reale; collegare i CSS modulari e gli script UI.
- Agganciare un task runner (es. Python o Node) per build, minify e i18n merge.
- Aggiungere test di accessibilita e linting (HTML/CSS/JS) sotto `tests/`.
