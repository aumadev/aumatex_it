/*
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        src/scripts/core/app.js
SCOPO:       Bootstrap applicazione tema e init base
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
  const CHIAVE_MEMORIA_TEMA = "tema";

  const Applicazione = {
    avvia() {
      this.applicaTemaSalvato();
      this.collegaCambioTema();
    },
    applicaTemaSalvato() {
      const temaSalvato = localStorage.getItem(CHIAVE_MEMORIA_TEMA);
      if (temaSalvato) document.documentElement.dataset.theme = temaSalvato;
    },
    collegaCambioTema() {
      const pulsanti = document.querySelectorAll("[data-theme-toggle]");
      pulsanti.forEach(pulsante => {
        pulsante.addEventListener("click", () => {
          const temaCorrente = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
          document.documentElement.dataset.theme = temaCorrente;
          localStorage.setItem(CHIAVE_MEMORIA_TEMA, temaCorrente);
        });
      });
    }
  };

  document.addEventListener("DOMContentLoaded", () => Applicazione.avvia());
})();
