const contactsOperations = require('../../model/contactsOperations');

const getAllContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  res.status(200).json(contacts);
};

module.exports = getAllContacts;
