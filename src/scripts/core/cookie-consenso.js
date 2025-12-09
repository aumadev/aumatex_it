/*
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        src/scripts/core/cookie-consenso.js
SCOPO:       Gestione banner consenso cookie
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
  const CHIAVE_CONSENSO = "preferenzeCookie";
  const CHIAVE_STATO_CONSENSO = "cookieConsent";
  const CLASSE_COMPATTA = "cookieBannerCompatto";
  const CLASSE_NASCOSTA = "cookieBannerNascosto";
  const banner = document.querySelector("[data-banner-cookie]");

  if (!banner) return;

  const interruttori = () => banner.querySelectorAll("[data-opzione-cookie]");

  function statoPredefinito() {
    return {
      essenziali: true,
      analisi: false,
      marketing: false,
      consensoDato: false,
      statoConsenso: "indefinito"
    };
  }

  function salvaStatoConsensoCookie(stato) {
    localStorage.setItem(CHIAVE_STATO_CONSENSO, stato);
  }

  function caricaStatoConsensoCookie() {
    return localStorage.getItem(CHIAVE_STATO_CONSENSO) || "indefinito";
  }

  function caricaPreferenze() {
    try {
      const salvate = JSON.parse(localStorage.getItem(CHIAVE_CONSENSO));
      if (salvate && typeof salvate === "object") {
        return {
          ...statoPredefinito(),
          ...salvate,
          statoConsenso: salvate.statoConsenso || caricaStatoConsensoCookie()
        };
      }
    } catch (e) {
      console.error(e);
    }
    return { ...statoPredefinito(), statoConsenso: caricaStatoConsensoCookie() };
  }

  function salvaPreferenze(preferenze) {
    localStorage.setItem(CHIAVE_CONSENSO, JSON.stringify(preferenze));
    salvaStatoConsensoCookie(preferenze.statoConsenso || "indefinito");
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
    preferenze.statoConsenso = "personalizzato";
    return preferenze;
  }

  function mostraBanner(compatta = true) {
    banner.hidden = false;
    banner.classList.toggle(CLASSE_COMPATTA, compatta);
    requestAnimationFrame(() => {
      banner.classList.remove(CLASSE_NASCOSTA);
    });
  }

  function nascondiBanner() {
    banner.classList.add(CLASSE_NASCOSTA);
    window.setTimeout(() => {
      banner.hidden = true;
    }, 280);
  }

  function applicaPreferenze(preferenze) {
    salvaPreferenze(preferenze);
    applicaUI(preferenze);
  }

  function accettaTutto() {
    const preferenze = { essenziali: true, analisi: true, marketing: true, consensoDato: true, statoConsenso: "all" };
    applicaPreferenze(preferenze);
    nascondiBanner();
  }

  function rifiutaOpzionali() {
    const preferenze = { essenziali: true, analisi: false, marketing: false, consensoDato: true, statoConsenso: "necessary" };
    applicaPreferenze(preferenze);
    nascondiBanner();
  }

  function salvaCorrenti() {
    const preferenze = { ...leggiUI(), statoConsenso: "custom" };
    applicaPreferenze(preferenze);
    nascondiBanner();
  }

  function espandiBanner() {
    banner.classList.remove(CLASSE_COMPATTA);
  }

  function comprimiBanner() {
    banner.classList.add(CLASSE_COMPATTA);
  }

  function chiudiBannerSenzaAccettare() {
    const preferenze = { essenziali: true, analisi: false, marketing: false, consensoDato: true, statoConsenso: "necessary" };
    applicaPreferenze(preferenze);
    nascondiBanner();
  }

  function collegaAzioni() {
    banner.querySelector("[data-cookie-accetta]")?.addEventListener("click", accettaTutto);
    banner.querySelector("[data-cookie-rifiuta]")?.addEventListener("click", rifiutaOpzionali);
    banner.querySelector("[data-cookie-salva]")?.addEventListener("click", salvaCorrenti);
    banner.querySelector("[data-cookie-personalizza]")?.addEventListener("click", espandiBanner);
    banner.querySelector("[data-cookie-chiudi]")?.addEventListener("click", chiudiBannerSenzaAccettare);
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
    if (!preferenze.consensoDato || caricaStatoConsensoCookie() === "indefinito") {
      mostraBanner();
    } else {
      nascondiBanner();
    }
    collegaAzioni();
    collegaRiapri();
  }

  document.addEventListener("DOMContentLoaded", avvia);
})();
