const fs = require('fs/promises');
const listContacts = require('./listContacts');
const contactsPath = require('../../helpers/contactsPath');

const addContact = async body => {
  const contacts = await listContacts();
  const newContact = { ...body };
  const updatedContacts = [...contacts, newContact];

  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
  return newContact;
};

module.exports = addContact;
