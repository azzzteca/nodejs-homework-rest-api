const createError = require('http-errors');
const { Contact } = require('../../models');

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const contact = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });

  if (!contact) {
    throw createError(404, `There is no contact with id - ${contactId} `);
  }

  res.json({
    status: 'succcess',
    code: 200,
    data: {
      contact,
    },
  });
};

module.exports = updateFavorite;
