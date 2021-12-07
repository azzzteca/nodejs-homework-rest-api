const createError = require('http-errors');

const { Contact } = require('../../models');

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndRemove(contactId);

  if (!deletedContact) {
    throw createError(404, `There is no contact with id - ${contactId} `);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      deletedContact,
    },
  });
};

module.exports = deleteContact;
