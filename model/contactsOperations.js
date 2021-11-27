const fs = require('fs/promises');
const contactsPath = require('./contactsPath');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return (contacts = JSON.parse(data));
};

const getContactById = async contactId => {
  const contacts = await listContacts();
  const contactById = contacts.find(contact => contact.id === parseInt(contactId));
  if (!contactById) {
    return null;
  }
  return contactById;
};

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

const addContact = async body => {
  const contacts = await listContacts();
  const newContact = { ...body };
  const updatedContacts = [...contacts, newContact];

  await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
  return newContact;
};

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

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
