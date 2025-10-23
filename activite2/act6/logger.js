// Importation du module 'fs' pour écrire dans un fichier
const fs = require("fs");

// Importation de la classe 'EventEmitter' du module 'events'
// Elle permet de créer et d'émettre des événements personnalisés
const EventEmitter = require("events");

// Définition d'une classe 'Logger' qui hérite de EventEmitter
class Logger extends EventEmitter {
  
  // Méthode 'log' qui prend un message comme paramètre
  log(message) {

    // Écrit le message dans un fichier 'log.txt'
    // appendFileSync ajoute à la fin du fichier sans écraser le contenu existant
    fs.appendFileSync("log.txt", message + "\n");

    // Émet un événement personnalisé appelé 'messageLogged'
    // avec un objet contenant le message et la date actuelle
    this.emit("messageLogged", { 
      message: message, 
      date: new Date() 
    });
  }
}

// Exportation de la classe pour pouvoir l’utiliser dans d’autres fichiers
module.exports = Logger;
