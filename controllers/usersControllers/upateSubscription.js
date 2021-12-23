const { User } = require('../../models');

const upateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { _id, email } = req.user;

  await User.findByIdAndUpdate(_id, { subscription });

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      user: {
        _id,
        email,
        subscription,
      },
    },
  });
};

module.exports = upateSubscription;
