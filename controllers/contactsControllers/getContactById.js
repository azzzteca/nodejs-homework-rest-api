const createError = require('http-errors');

const contactsOperations = require('../../model/contactsOperations');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsOperations.getContactById(contactId);

  if (!contact) {
    throw createError(404, `There is no contact with id - ${contactId} `);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      contact,
    },
  });
};

module.exports = getContactById;
