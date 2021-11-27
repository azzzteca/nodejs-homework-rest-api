const createError = require('http-errors');

const contactsOperations = require('../../model/contactsOperations');

const putContact = async (req, res) => {
  const { contactId } = req.params;

  const updatedContact = await contactsOperations.updateContact(contactId, req.body);

  if (!updatedContact) {
    throw createError(404, `There is no contact with id - ${contactId} `);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      updatedContact,
    },
  });
};

module.exports = putContact;
