const { User } = require('../../models');
const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');
const { sendEmail } = require('../../helpers');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email ${email} in use!`);
  }

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  await User.create({ email, password: hashedPassword, avatarURL, verificationToken });

  const emailToSend = {
    to: email,
    subject: 'Подтверждение email',
    html: ` <a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">
        Пожалуйста, подтвердите свой email
      </a>`,
  };

  await sendEmail(emailToSend);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        subscription: 'starter',
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = register;
