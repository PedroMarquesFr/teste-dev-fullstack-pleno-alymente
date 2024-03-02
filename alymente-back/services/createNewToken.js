const jwt = require('jsonwebtoken');

const secret = 'senhasecretashiii';

const createNewToken = (id, email, password, displayName, role) => {
  const jwtConfig = {
    expiresIn: '23h',
    algorithm: 'HS256',
  };
  const token = jwt.sign(
    { data: { email, password, id, displayName, role } },
    secret,
    jwtConfig,
  );
  return token;
};

module.exports = { createNewToken };
