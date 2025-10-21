const contacts = [];

function ajouterContact(name, phone) {
  contacts.push({ name, phone });
}

function listerContacts() {
  return contacts;
}

module.exports = { ajouterContact, listerContacts };