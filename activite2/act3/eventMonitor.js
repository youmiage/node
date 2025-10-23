// kanstawrdo lmodule events man node 
const EventEmitter = require("events");

// kansawbo wahad objet yamkan isayfat we tsanat levenement
const emitter = new EventEmitter();

// kantsantou lwahad evenement smito utilisateurConnecte man ba3d affichage dyal le nom et id
emitter.on("utilisateurConnecte", (data) => {
  console.log(`Nouvelle connexion : ${data.nom} (ID: ${data.id})`);
});

// execution dyal event 
emitter.emit("utilisateurConnecte", { id: 1, nom: "Asma" });
