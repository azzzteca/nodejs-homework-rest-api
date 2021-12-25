const bcrypt = require('bcryptjs');

const { User } = require('../../models');
const login = require('./login');

const req = {
  body: {
    email: 'LOGINTEST@mail.com',
    password: 'PASS_TEST',
  },
};

const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

const mockUser = {
  _id: '61c481095b2012461bceceed',
  password: hashedPassword,
  email: 'LOGINTEST@mail.com',
  subscription: 'LOGIN_TEST',
  token: 'TOKEN_TEST',
  avatarURL: 'AVATARURL_TEST',
};

const res = {
  json: {
    status: 'success',
    code: 200,
    mockUser,
  },
};

describe('test login controller', () => {
  test('user exist', async () => {
    jest.spyOn(User, 'findOne').mockImplementationOnce(() => mockUser);

    const result = await login(req, res);

    expect(result.email).not.toBeUndefined('LOGINTEST@mail.com');
  });
});
