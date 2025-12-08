from pathlib import Path

GREZZI = Path(__file__).resolve().parents[3] / "src" / "media" / "images" / "raw"
OTTIMIZZATI = Path(__file__).resolve().parents[3] / "src" / "media" / "images" / "optimized"


def esegui():
  print(f"[optimize] raw -> {GREZZI}")
  print(f"[optimize] optimized -> {OTTIMIZZATI}")


if __name__ == "__main__":
  esegui()
