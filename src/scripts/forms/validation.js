/*
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        src/scripts/forms/validation.js
SCOPO:       Validazione form lato client
VERSIONE:    1.0
DATA:        04/11/2025
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
