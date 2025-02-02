const express = require('express');

const { auth, upload, ctrlWrapper } = require('../../middlewares');
const { usersControllers: ctrl } = require('../../controllers');

const router = express.Router();

router.patch('/', auth, ctrlWrapper(ctrl.upateSubscription));
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));
router.patch('/avatars', auth, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));
router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail));
router.post('/verify', ctrlWrapper(ctrl.reVerification));

module.exports = router;
