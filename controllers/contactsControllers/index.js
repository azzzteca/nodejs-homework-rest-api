const getAllContacts = require('./getAllContacts');
const getContactById = require('./getContactById');
const postContact = require('./postContact');
const deleteContact = require('./deleteContact');
const putContact = require('./putContact');
const updateFavorite = require('./updateFavorite');

module.exports = {
  getAllContacts,
  getContactById,
  postContact,
  deleteContact,
  putContact,
  updateFavorite,
};
