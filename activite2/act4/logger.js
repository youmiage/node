// Importation du module events intégré à Node.js
// Ce module permet de créer et gérer des événements personnalisés
const EventEmitter = require("events");

// Déclaration d'une classe 'Logger' qui hérite (extends) de EventEmitter
// Cela signifie que 'Logger' possède toutes les fonctionnalités d'un EventEmitter
class Logger extends EventEmitter {
    
    // Méthode 'log' qui affiche un message et émet un événement
    log(message) {
        // Affiche le message dans la console
        console.log("LOG :", message);
        
        // Émet un événement personnalisé appelé "messageLogged"
        // On envoie aussi un objet contenant le message et la date
        this.emit("messageLogged", { message, date: new Date() });
    }
}

// On exporte la classe Logger pour pouvoir l’utiliser dans d’autres fichiers
module.exports = Logger;
