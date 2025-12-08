export async function caricaJSON(percorso) {
  const risposta = await fetch(percorso);
  if (!risposta.ok) throw new Error(`Impossibile caricare ${percorso}`);
  return risposta.json();
}
