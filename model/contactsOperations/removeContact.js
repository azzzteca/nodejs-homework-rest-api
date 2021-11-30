const fs = require('fs/promises');
const listContacts = require('./listContacts');
const contactsPath = require('../../helpers/contactsPath');

const removeContact = async contactId => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(contact => contact.id === parseInt(contactId));

  if (idx === -1) {
    return null;
  }

  const [removedContact] = contacts.splice(idx, 1);

  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return removedContact;
};

module.exports = removeContact;
