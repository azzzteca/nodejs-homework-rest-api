const express = require('express');
const router = express.Router();

const { validathion, ctrlWrapper } = require('../../middlewares');
const { contactJoiSchema, contactFavoriteJoiSchema } = require('../../models/contact');

const { contactsControllers: ctrl } = require('../../controllers/');

router.get('/', ctrlWrapper(ctrl.getAllContacts));

router.get('/:contactId', ctrlWrapper(ctrl.getContactById));

router.post('/', validathion(contactJoiSchema), ctrlWrapper(ctrl.postContact));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

router.put('/:contactId', validathion(contactJoiSchema), ctrlWrapper(ctrl.putContact));

router.patch(
  '/:contactId/favorite',
  validathion(contactFavoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
