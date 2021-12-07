const createError = require('http-errors');

const { Contact } = require('../../models');

const putContact = async (req, res) => {
  const { contactId } = req.params;

  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

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
