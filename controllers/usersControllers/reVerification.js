const { User } = require('../../models');
const { BadRequest } = require('http-errors');
const { sendEmail } = require('../../helpers');

const reVerification = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw BadRequest('Missing required field email');

    // А можно так возвращать ? Код снизу. Имеется в виду, можно ли делать такие возвраты
    //по условиям (if) несколько раз в одном контроллере.
    // res.status(400).json({ message: 'Missing required field email' });
  }

  const user = await User.findOne(email);

  if (!user.verificationToken) {
    throw BadRequest('Verification has already been passed');
  }

  const emailToSend = {
    to: email,
    subject: 'Подтверждение email',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${user.verificationToken}">
  Пожалуйста, подтвердите свой email
  </a>`,
  };

  await sendEmail(emailToSend);

  res.status(200).json({
    message: 'Verification email resent',
  });
};

module.exports = reVerification;
