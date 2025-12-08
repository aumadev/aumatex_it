(function () {
  const CHIAVE_CONSENSO = "preferenzeCookie";
  const banner = document.querySelector("[data-banner-cookie]");

  if (!banner) return;

  const interruttori = () => banner.querySelectorAll("[data-opzione-cookie]");

  function statoPredefinito() {
    return {
      essenziali: true,
      analisi: false,
      marketing: false,
      consensoDato: false
    };
  }

  function caricaPreferenze() {
    try {
      const salvate = JSON.parse(localStorage.getItem(CHIAVE_CONSENSO));
      if (salvate && typeof salvate === "object") return { ...statoPredefinito(), ...salvate };
    } catch (e) {
      console.error(e);
    }
    return statoPredefinito();
  }

  function salvaPreferenze(preferenze) {
    localStorage.setItem(CHIAVE_CONSENSO, JSON.stringify(preferenze));
  }

  function applicaUI(preferenze) {
    interruttori().forEach(input => {
      const chiave = input.dataset.opzioneCookie;
      if (chiave === "essenziali") {
        input.checked = true;
        input.disabled = true;
      } else {
        input.checked = Boolean(preferenze[chiave]);
      }
    });
  }

  function leggiUI() {
    const preferenze = statoPredefinito();
    interruttori().forEach(input => {
      const chiave = input.dataset.opzioneCookie;
      if (chiave === "essenziali") return;
      preferenze[chiave] = input.checked;
    });
    preferenze.consensoDato = true;
    return preferenze;
  }

  function mostraBanner() {
    banner.hidden = false;
    banner.classList.add("banner-cookie--compresso");
  }

  function nascondiBanner() {
    banner.hidden = true;
  }

  function applicaPreferenze(preferenze) {
    // Punto di integrazione per script di terze parti (analytics/marketing) in base alle scelte.
    // Per ora si limita a salvare.
    salvaPreferenze(preferenze);
    applicaUI(preferenze);
  }

  function accettaTutto() {
    const preferenze = { essenziali: true, analisi: true, marketing: true, consensoDato: true };
    applicaPreferenze(preferenze);
    nascondiBanner();
  }

  function rifiutaOpzionali() {
    const preferenze = { essenziali: true, analisi: false, marketing: false, consensoDato: true };
    applicaPreferenze(preferenze);
    nascondiBanner();
  }

  function salvaCorrenti() {
    const preferenze = leggiUI();
    applicaPreferenze(preferenze);
    nascondiBanner();
  }

  function espandiBanner() {
    banner.classList.remove("banner-cookie--compresso");
  }

  function comprimiBanner() {
    banner.classList.add("banner-cookie--compresso");
  }

  function collegaAzioni() {
    banner.querySelector("[data-cookie-accetta]")?.addEventListener("click", accettaTutto);
    banner.querySelector("[data-cookie-rifiuta]")?.addEventListener("click", rifiutaOpzionali);
    banner.querySelector("[data-cookie-salva]")?.addEventListener("click", salvaCorrenti);
    banner.querySelector("[data-cookie-personalizza]")?.addEventListener("click", espandiBanner);
    banner.querySelector("[data-cookie-chiudi]")?.addEventListener("click", comprimiBanner);
  }

  function collegaRiapri() {
    document.querySelectorAll("[data-riapri-cookie]").forEach(link => {
      link.addEventListener("click", evento => {
        evento.preventDefault();
        mostraBanner();
        applicaUI(caricaPreferenze());
        comprimiBanner();
      });
    });
  }

  function avvia() {
    const preferenze = caricaPreferenze();
    applicaUI(preferenze);
    if (!preferenze.consensoDato) {
      mostraBanner();
    } else {
      nascondiBanner();
    }
    collegaAzioni();
    collegaRiapri();
  }

  document.addEventListener("DOMContentLoaded", avvia);
})();
