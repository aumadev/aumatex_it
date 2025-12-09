<!--
PROJECT: Aumatex Template
───────────────────────────────────────────────────────────────────────────────
    |     '||'  '|' '||    ||'     |     '||''|.   '||''''|  '||'  '|'
   |||     ||    |   |||  |||     |||     ||   ||   ||  .     '|.  .'
  |  ||    ||    |   |'|..'||    |  ||    ||    ||  ||''|      ||  |
 .''''|.   ||    |   | '|' ||   .''''|.   ||    ||  ||          |||
.|.  .||.   '|..'   .|. | .||. .|.  .||. .||...|'  .||.....|     |
───────────────────────────────────────────────────────────────────────────────
FILE:        codex-instructions.md
SCOPO:       Istruzioni di sviluppo per Codex
VERSIONE:    1.0
DATA:        04/11/2025
AUTORE:      Aumatex srls  |  www.aumatex.it
AMBIENTE:    sviluppo
BUILD:       beta
STACK:       Markdown
REPO:        https://github.com/aumadev/aumatex_it
LICENZA:     Software proprietario © 2025 Aumatex srls
NOTE:        Uso interno. Vietata qualsiasi diffusione o modifica non autorizzata.
───────────────────────────────────────────────────────────────────────────────
-->

# codexInstructions

> Istruzioni per qualsiasi azione automatica sul progetto Interactive Muse  
> (lettura consigliata per ogni run)

---

## 1. Intestazioni dei file

- Ogni **nuovo file** creato (HTML, CSS, JS, TS, JSON, MD, ecc.) deve avere l’**intestazione ASCII standard** del progetto in cima.
- I file esistenti ce l’hanno già: **non rigenerare** o riscrivere tutte le intestazioni, lasciale com’erano.
- Compila sempre i campi:
  - `FILE:` percorso relativo corretto.
  - `SCOPO:` descrizione breve e specifica del file.
  - `STACK:` tecnologie effettivamente usate nel file.
- Usa la sintassi di commento corretta per ogni linguaggio.
- **Non** aggiungere intestazioni a file che non supportano commenti (es. JSON, PNG, ICO, altri binari).

---

## 2. Naming e convenzioni

- Tutti i nomi di:
  - pagine,
  - file,
  - funzioni,
  - classi CSS/JS,
  - componenti,
  - animazioni,
devono essere **in camelCase**.  
  Esempi: `headerPrincipale`, `cookieBannerController`, `browserConfig`, `animazioneHeaderScroll`.

- Se rinomini o sposti file:
  - aggiorna **TUTTI i riferimenti** (import/export, link HTML, path CSS/JS, riferimenti nei JSON, ecc.).
  - Mantieni il progetto funzionante dopo il cambio.

---

## 3. i18n (internazionalizzazione)

- Qualsiasi testo visibile all’utente (**sempre**) deve passare tramite il sistema **i18n**:
  - niente stringhe hard-coded in HTML/JS/CSS (tranne casi strettamente tecnici non visibili all’utente).
- Lingue supportate (obbligatorie):
  - `it` (italiano – lingua principale),
  - `en` (inglese),
  - `es` (spagnolo).
- Quando aggiungi un nuovo testo:
  - aggiungi la chiave nei file JSON di traduzione già esistenti,
  - se serve un **nuovo file di traduzione**, crealo seguendo la struttura modulare attuale e nello **stesso percorso/logica** già usata per gli altri file i18n.
- Usa ovunque i pattern già presenti:
  - es. attributi `data-i18n`, funzioni helper esistenti, loader i18n centrale, ecc.

---

## 4. Variables, temi e animazioni

- Usa SEMPRE le **variables** e il sistema di **temi** già esistenti:
  - per colori, font, spaziature, borderRadius, shadow, animazioni, z-index, ecc.
- Quando ti servono nuovi valori:
  - definisci nuove variables nelle **loro classi/file dedicati** (es. file `variables` / `theme` / `animations` già presenti),
  - nomi sempre in camelCase (es. `--coloreEvidenzaHeader`, `--animazioneHeaderScroll`).
- Non duplicare valori magici nel codice; referenzia le variables/temi centralizzati.

---

## 5. Struttura modulare

- Tutto il codice deve essere **modulare e ben diviso**:
  - componenti UI, logica, stili, traduzioni separati in file e cartelle coerenti,
  - evitare file monolitici che mescolano troppe responsabilità.
- Rispetta l’architettura esistente:
  - se esiste un modulo per header, footer, cookieBanner, ecc., estendi quello,
  - se crei nuovi componenti, mettili nella posizione più coerente (ad es. `src/components/nomeComponente/...`).
- Usa ES Modules dove è già in uso (import/export); se aggiungi nuovo JS a moduli esistenti, segui lo stesso pattern.

---

## 6. Formattazione del codice

- Obiettivo: **codice coerente esteticamente** in tutto il progetto.
- Regole:
  - indentazione con **2 spazi**, nessun tab.
  - niente spazi a fine riga.
  - niente righe vuote multiple inutili.
  - ogni file termina con **un solo newline finale**.
- Quando modifichi un file:
  - mantieni la formattazione coerente,
  - puoi sistemare indentazioni errate se non cambi la logica.

---

## 7. Documentazione in Markdown

- Ogni **nuovo file** creato deve essere referenziato in almeno un `.md` di documentazione.
- Struttura preferita (opzione modulare):
  - sezioni per **componente/modulo** (es. `Header`, `CookieBanner`, `Routing`, `i18n`, ecc.),
  - per ogni componente elenca i file rilevanti (in camelCase) e il loro ruolo.
- Quando aggiungi/modifichi un modulo:
  - aggiorna la sezione MD corrispondente.

---

## 8. Comportamento generale per le modifiche

Quando ricevi un nuovo comando per modificare il progetto:

1. **Leggi prima questo file** `codex-instructions.md`.
2. Applica SEMPRE tutte le regole sopra, a prescindere dal prompt specifico.
3. Se una richiesta contraddice queste regole:
   - cerca una soluzione che le rispetti comunque (ad es. aggiungi i18n, camelCase, modularità),
   - mantieni il progetto funzionante, con referenze corrette e struttura coerente.