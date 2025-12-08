from pathlib import Path

RADICE = Path(__file__).resolve().parents[2]


def raccogli_pagine():
  return sorted(RADICE.glob("*.html"))


def esegui():
  pagine = raccogli_pagine()
  print(f"[build] trovate {len(pagine)} pagine nella root")


if __name__ == "__main__":
  esegui()
