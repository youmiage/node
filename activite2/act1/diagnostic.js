const os = require("os");

console.log("plateforme :" ,os.platform());
console.log("Architecture :", os.arch);
console.log("CPU :" , os.cpus().length  , "coeurs");
console.log("Memoire totale" ,os.totalmem());
console.log("Memoire libre" , os.freemem());
console.log("Uptime (en heures)", (os.uptime()/3600).toFixed(2));

