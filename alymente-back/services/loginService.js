const { createNewToken } = require('./createNewToken');
const { Users } = require('../models');
const errMessage = require('./errMessage');

const validateCamps = (email, password) => {
  if (email === '')
    return errMessage('"email" is not allowed to be empty', 400);
  if (password === '')
    return errMessage('"password" is not allowed to be empty', 400);
  if (!email) return errMessage('"email" is required', 400);
  if (!password) return errMessage('"password" is required', 400);
  return { ok: 'ok' };
};

const validateCampsAutheticity = (password, doesUserExists) => {
  if (doesUserExists.password !== password) return { ok: false };
  return { ok: true };
};

const newLogin = async (email, password) => {
  const isValid = validateCamps(email, password);
  if (!isValid.ok) return isValid;

  const doesUserExists = await Users.findOne({ where: { email } });
  if (!doesUserExists) return errMessage('User Email is not registered', 400);
  const isAutheticityValid = validateCampsAutheticity(password, doesUserExists);
  if (!isAutheticityValid.ok) return errMessage('Password is incorrect', 400);
  console.log(doesUserExists.dataValues.roleId);
  const token = createNewToken(
    doesUserExists.dataValues.id,
    email,
    password,
    doesUserExists.dataValues.displayName,
    doesUserExists.dataValues.roleId
  );
  doesUserExists.password = undefined;
  return { token, user: doesUserExists };
};

module.exports = { newLogin };
