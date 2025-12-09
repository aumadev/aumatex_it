/*
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        src/scripts/ui/headerController.js
SCOPO:       Gestione sticky header e riduzione su scroll
VERSIONE:    1.7
DATA:        13/03/2026
AUTORE:      Aumatex srls  |  www.aumatex.it
AMBIENTE:    sviluppo
BUILD:       beta
STACK:       JavaScript
REPO:        https://github.com/aumadev/aumatex_it
LICENZA:     Software proprietario © 2025 Aumatex srls
NOTE:        Uso interno. Vietata qualsiasi diffusione o modifica non autorizzata.
───────────────────────────────────────────────────────────────────────────────
*/

(function () {
  const CLASSE_COMPATTO = "headerCompatto";
  const SOGLIA_SCROLL_PREDEFINITA = 96;

  function aggiornaScrollPadding(header) {
    document.documentElement.style.setProperty("--offsetHeaderSticky", `${header.offsetHeight}px`);
  }

  function aggiornaStatoHeader(header, soglia) {
    const compatto = window.scrollY > soglia;
    header.classList.toggle(CLASSE_COMPATTO, compatto);
  }

  function inizializzaHeaderScroll() {
    const header = document.querySelector("[data-header]");
    if (!header) return;

    const soglia = Number(header.dataset.headerSoglia || SOGLIA_SCROLL_PREDEFINITA);
    const aggiorna = () => {
      aggiornaStatoHeader(header, soglia);
      aggiornaScrollPadding(header);
    };

    aggiorna();
    window.addEventListener("scroll", aggiorna, { passive: true });
    window.addEventListener("resize", () => aggiornaScrollPadding(header));
  }

  document.addEventListener("DOMContentLoaded", () => {
    inizializzaHeaderScroll();
  });
})();
