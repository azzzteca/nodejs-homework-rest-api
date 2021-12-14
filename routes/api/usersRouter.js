const express = require('express');

const { auth, ctrlWrapper } = require('../../middlewares');
const { usersControllers: ctrl } = require('../../controllers');

const router = express.Router();

router.patch('/', auth, ctrlWrapper(ctrl.patch));
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
