(function () {
  function chiudiNavigazione(navigazione, interruttore) {
    navigazione.classList.remove("is-open");
    interruttore?.classList.remove("is-open");
    document.body.classList.remove("nav-aperta");
  }

  function apriNavigazione(navigazione, interruttore) {
    navigazione.classList.add("is-open");
    interruttore?.classList.add("is-open");
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
