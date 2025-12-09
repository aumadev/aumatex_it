# PROJECT: Aumatex Template
# ───────────────────────────────────────────────────────────────────────────────
#     |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
#    |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
#   |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
#  .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
# .|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
# ───────────────────────────────────────────────────────────────────────────────
# FILE:        python/tasks/build.py
# SCOPO:       Task build per raccolta pagine root
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

RADICE = Path(__file__).resolve().parents[2]


def raccogli_pagine():
  return sorted(RADICE.glob("*.html"))


def esegui():
  pagine = raccogli_pagine()
  print(f"[build] trovate {len(pagine)} pagine nella root")


if __name__ == "__main__":
  esegui()
