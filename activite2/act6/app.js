// Importation du module 'http' pour créer un serveur web
const http = require("http");

// Importation de notre classe Logger depuis le fichier logger.js
const Logger = require("./logger");

// Création d'une instance (objet) de la classe Logger
const logger = new Logger();

// On écoute l'événement 'messageLogged' émis par le Logger
// Chaque fois qu'un message est enregistré, ce bloc sera exécuté
logger.on("messageLogged", (data) => {
  console.log("Événement capturé :", data);
});

// Création d'un serveur HTTP
const server = http.createServer((req, res) => {

  // Chaque fois qu'une requête arrive, on écrit un log
  logger.log(`Requête reçue : ${req.url}`);

  // On renvoie une réponse au navigateur
  res.end(" Requête enregistrée !");
});

// Démarrage du serveur sur le port 4000
server.listen(4000, () => 
  console.log(" Serveur en cours d’exécution sur le port 4000...")
);
