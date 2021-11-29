const fs = require('fs/promises');
const contactsPath = require('../../helpers/contactsPath');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return (contacts = JSON.parse(data));
};

module.exports = listContacts;
