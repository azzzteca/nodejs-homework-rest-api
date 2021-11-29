const listContacts = require('./listContacts');

const getContactById = async contactId => {
  const contacts = await listContacts();
  const contactById = contacts.find(contact => contact.id === parseInt(contactId));
  if (!contactById) {
    return null;
  }
  return contactById;
};

module.exports = getContactById;
