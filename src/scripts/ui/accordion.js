(function () {
  document.addEventListener("click", evento => {
    const attivatore = evento.target.closest("[data-accordion-toggle]");
    if (!attivatore) return;
    const pannello = document.querySelector(attivatore.dataset.accordionToggle);
    if (!pannello) return;
    pannello.classList.toggle("is-open");
  });
})();
