# PROJECT: Aumatex Template
# ───────────────────────────────────────────────────────────────────────────────
#     |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
#    |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
#   |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
#  .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
# .|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
# ───────────────────────────────────────────────────────────────────────────────
# FILE:        python/tasks/optimize_images.py
# SCOPO:       Task placeholder ottimizzazione immagini
# VERSIONE:    1.0
# DATA:        04/11/2025
# AUTORE:      Aumatex srls  |  www.aumatex.it
# AMBIENTE:    sviluppo
# BUILD:       beta
# STACK:       Python
# REPO:        https://github.com/aumadev/aumatex_it
# LICENZA:     Software proprietario © 2025 Aumatex srls
# NOTE:        Uso interno. Vietata qualsiasi diffusione o modifica non autorizzata.
# ───────────────────────────────────────────────────────────────────────────────

from pathlib import Path

GREZZI = Path(__file__).resolve().parents[3] / "src" / "media" / "images" / "raw"
OTTIMIZZATI = Path(__file__).resolve().parents[3] / "src" / "media" / "images" / "optimized"


def esegui():
  print(f"[optimize] raw -> {GREZZI}")
  print(f"[optimize] optimized -> {OTTIMIZZATI}")


if __name__ == "__main__":
  esegui()
