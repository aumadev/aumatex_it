/*
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        src/scripts/core/i18n.js
SCOPO:       Gestione localizzazione client
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
  const percorsi = {
    localizzazioni: "./src/locales",
  };

  const LINGUA_PREDEFINITA = "en";
  let stato = {
    lingua: localStorage.getItem("lingua") || LINGUA_PREDEFINITA,
    dizionario: {},
  };

  const traduciChiave = chiave => {
    const parti = chiave.split(".");
    return parti.reduce((acc, parte) => (acc && acc[parte] ? acc[parte] : null), stato.dizionario) || chiave;
  };

  async function caricaDizionario(lingua) {
    const risposta = await fetch(`${percorsi.localizzazioni}/${lingua}/common.json`);
    if (!risposta.ok) throw new Error(`Localizzazione mancante per ${lingua}`);
    return risposta.json();
  }

  function applicaTraduzioni() {
    document.querySelectorAll("[data-i18n]").forEach(nodo => {
      const chiave = nodo.getAttribute("data-i18n");
      const valore = traduciChiave(chiave);
      if (nodo.dataset.i18nAttr) {
        nodo.setAttribute(nodo.dataset.i18nAttr, valore);
      } else {
        nodo.textContent = valore;
      }
    });
  }

  function evidenziaLingua(lingua) {
    document.querySelectorAll("[data-lang]").forEach(pulsante => {
      pulsante.classList.toggle("is-active", pulsante.dataset.lang === lingua);
    });
  }

  async function impostaLingua(lingua) {
    try {
      const dizionario = await caricaDizionario(lingua);
      stato = { lingua, dizionario };
      document.documentElement.lang = lingua;
      localStorage.setItem("lingua", lingua);
      applicaTraduzioni();
      if (window.CaricatoreContenuti?.rendiCardHome) {
        window.CaricatoreContenuti.rendiCardHome(lingua);
      }
      evidenziaLingua(lingua);
      sincronizzaSelectLingua(lingua);
    } catch (errore) {
      console.error(errore);
    }
  }

  function collegaSelettoriLingua() {
    document.querySelectorAll("[data-lang]").forEach(pulsante => {
      pulsante.addEventListener("click", () => impostaLingua(pulsante.dataset.lang));
    });
    document.querySelectorAll("[data-lang-select]").forEach(select => {
      select.addEventListener("change", () => impostaLingua(select.value));
    });
  }

  function aggiornaAnno() {
    const target = document.querySelector("[data-year]");
    if (target) target.textContent = new Date().getFullYear();
  }

  function sincronizzaSelectLingua(lingua) {
    document.querySelectorAll("[data-lang-select]").forEach(select => {
      select.value = lingua;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    collegaSelettoriLingua();
    aggiornaAnno();
    impostaLingua(stato.lingua);
  });

  window.Localizzazione = { impostaLingua, traduciChiave };
})();
