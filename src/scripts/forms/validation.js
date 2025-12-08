(function () {
  function validaCampo(campo) {
    if (!campo.required) return true;
    const valido = Boolean(campo.value && campo.value.trim().length);
    campo.toggleAttribute("aria-invalid", !valido);
    const errore = campo.parentElement?.querySelector(".form-error");
    if (errore) errore.hidden = valido;
    return valido;
  }

  document.addEventListener("submit", evento => {
    const form = evento.target;
    if (!(form instanceof HTMLFormElement)) return;
    const campi = Array.from(form.querySelectorAll("[required]"));
    const tuttiValidi = campi.every(validaCampo);
    if (!tuttiValidi) evento.preventDefault();
  });
})();
