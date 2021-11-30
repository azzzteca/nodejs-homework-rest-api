const express = require('express');
const router = express.Router();

const { validathion, ctrlWrapper } = require('../../middlewares');
const { contactSchema } = require('../../schemas');
const { contactsControllers: ctrl } = require('../../controllers/');

router.get('/', ctrlWrapper(ctrl.getAllContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', validathion(contactSchema), ctrlWrapper(ctrl.postContact));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

router.put('/:contactId', validathion(contactSchema), ctrlWrapper(ctrl.putContact));

module.exports = router;
