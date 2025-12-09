/*
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        src/scripts/data/content-loader.js
SCOPO:       Loader contenuti home da JSON
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
  const percorsoContenuti = "./src/data/content";

  async function ottieniJSON(percorso) {
    const risposta = await fetch(percorso);
    if (!risposta.ok) throw new Error(`Impossibile caricare ${percorso}`);
    return risposta.json();
  }

  async function rendiCardHome(lingua) {
    const griglia = document.querySelector("[data-card-grid]");
    if (!griglia) return;
    try {
      const dati = await ottieniJSON(`${percorsoContenuti}/home.${lingua}.json`);
      griglia.innerHTML = (dati.cards || []).map(modelloCard).join("");
    } catch (errore) {
      console.error(errore);
    }
  }

  function modelloCard(card) {
    return `
      <article class="card">
        <img class="card-media" src="${card.immagine}" alt="${card.titolo}">
        <div class="card-body">
          <p class="eyebrow">${card.categoria}</p>
          <h3>${card.titolo}</h3>
          <p>${card.descrizione}</p>
          <a class="bottoneCollegamento" href="${card.url}">${card.cta || "Scopri di più"}</a>
        </div>
      </article>
    `;
  }

  window.CaricatoreContenuti = { rendiCardHome };
})();
