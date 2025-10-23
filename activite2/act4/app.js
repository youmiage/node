// kanjibou la classe Logger man fichier logger.js
const Logger = require("./logger");

// kandirou wahad instance (un objet) man classe Logger
const logger = new Logger();

// On "écoute" l'événement 'messageLogged'
// kola mara had evenement ki bda  la fonction  s’exécute
logger.on("messageLogged", (data) => {
    console.log("Événement capturé :", data);
});

// kandirou appelle la méthode log()
//  affichage dyal  message et lancement dyal événement 'messageLogged'
logger.log("Application démarrée !!");
