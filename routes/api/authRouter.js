const express = require('express');
const { auth, validathion, ctrlWrapper } = require('../../middlewares');
const { authControllers: ctrl } = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

const router = express.Router();

router.post('/register', validathion(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post('/login', validathion(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
