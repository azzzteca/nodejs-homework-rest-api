const contactSchema = require('../../schemas');
const contactsOperations = require('../../model/contactsOperations');

const postContact = async (req, res) => {
  const newContact = await contactsOperations.addContact(req.body);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      newContact,
    },
  });
};

module.exports = postContact;
