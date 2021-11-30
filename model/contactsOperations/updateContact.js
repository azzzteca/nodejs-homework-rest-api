const fs = require('fs/promises');
const listContacts = require('./listContacts');

const updateContact = async (contactId, body) => {
  const { id, name, email, phone } = body;
  const contacts = await listContacts();

  const idx = contacts.findIndex(contact => contact.id === parseInt(contactId));

  if (idx === -1) {
    return null;
  }

  const updatedContact = { ...contacts[idx], id, name, email, phone };
  contacts.splice(idx, 1, updatedContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts));

  return updatedContact;
};

module.exports = updateContact;
