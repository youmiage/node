const os = require("os");

console.log("Plateforme :", os.platform());
console.log("Architecture :", os.arch());
console.log("CPU :", os.cpus().length, "cœurs");
console.log("Mémoire totale :", os.totalmem(), "octets");
console.log("Mémoire libre :", os.freemem(), "octets");
console.log("Uptime (en heures) :", (os.uptime() / 3600).toFixed(2));