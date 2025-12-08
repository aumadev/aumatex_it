(function () {
  const coda = [];
  const traccia = dati => coda.push({ istante: Date.now(), ...dati });

  document.addEventListener("DOMContentLoaded", () => {
    traccia({ tipo: "page_view", percorso: window.location.pathname });
  });

  window.Analisi = { traccia, coda };
})();
