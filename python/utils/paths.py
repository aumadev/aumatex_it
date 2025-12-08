# PROJECT: Interactive Muse
# ───────────────────────────────────────────────────────────────────────────────
#     |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
#    |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
#   |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
#  .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
# .|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
# ───────────────────────────────────────────────────────────────────────────────
# FILE:        python/utils/paths.py
# SCOPO:       Costanti di percorso del progetto
# VERSIONE:    1.0
# DATA:        04/11/2025
# AUTORE:      Aumatex srls  |  www.aumatex.it
# AMBIENTE:    sviluppo
# BUILD:       beta
# STACK:       Python
# REPO:        https://github.com/aumadev/openart
# LICENZA:     Software proprietario © 2025 Aumatex srls
# NOTE:        Uso interno. Vietata qualsiasi diffusione o modifica non autorizzata.
# ───────────────────────────────────────────────────────────────────────────────

from pathlib import Path

RADICE = Path(__file__).resolve().parents[3]
SORGENTE = RADICE / "src"
DATI = SORGENTE / "data"
LOCALIZZAZIONI = SORGENTE / "locales"
MEDIA = SORGENTE / "media"
