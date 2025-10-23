const { ajouterContact, listerContacts } = require("./contactService");
const  formaterContact  = require("./utils/format");

ajouterContact("Younes", "0600000000");
ajouterContact("Sara", "0611111111");

console.log("Liste des contacts :");
listerContacts().forEach(c => {
  console.log(formaterContact(c));
});
