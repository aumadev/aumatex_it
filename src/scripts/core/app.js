(function () {
const CHIAVE_MEMORIA_TEMA = "tema";

const Applicazione = {
  avvia() {
    this.applicaTemaSalvato();
    this.collegaCambioTema();
    this.compressioneHeader();
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
    },
    compressioneHeader() {
      const header = document.querySelector("[data-header]");
      if (!header) return;
      const gestisciScroll = () => {
        const scrolled = window.scrollY > 8;
        header.classList.toggle("site-header--compresso", scrolled);
      };
      gestisciScroll();
      window.addEventListener("scroll", gestisciScroll);
    }
  };

  document.addEventListener("DOMContentLoaded", () => Applicazione.avvia());
})();
