/*
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        src/scripts/ui/nav.js
SCOPO:       Gestione navigazione mobile e overlay
VERSIONE:    1.1
DATA:        09/03/2026
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
  function chiudiNavigazione(navigazione, interruttore) {
    navigazione.classList.remove("is-open");
    interruttore?.classList.remove("is-open");
    interruttore?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-aperta");
  }

  function apriNavigazione(navigazione, interruttore) {
    navigazione.classList.add("is-open");
    interruttore?.classList.add("is-open");
    interruttore?.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-aperta");
  }

  document.addEventListener("click", evento => {
    const interruttore = evento.target.closest("[data-nav-toggle]");
    if (interruttore) {
      const navigazione = document.querySelector(interruttore.dataset.navToggle);
      if (!navigazione) return;
      const aperta = navigazione.classList.contains("is-open");
      aperta ? chiudiNavigazione(navigazione, interruttore) : apriNavigazione(navigazione, interruttore);
      return;
    }

    const linkMenu = evento.target.closest(".nav-list a");
    if (linkMenu) {
      const navigazione = linkMenu.closest(".primary-nav");
      const interruttoreAttivo = document.querySelector("[data-nav-toggle]");
      if (navigazione) chiudiNavigazione(navigazione, interruttoreAttivo);
      return;
    }

    const overlay = evento.target.classList.contains("primary-nav");
    if (overlay) {
      const navigazione = evento.target;
      const interruttoreAttivo = document.querySelector("[data-nav-toggle]");
      chiudiNavigazione(navigazione, interruttoreAttivo);
    }
  });
})();
