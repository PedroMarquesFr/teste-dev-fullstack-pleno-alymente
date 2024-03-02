const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const segredo = 'senhasecretashiii';
const role = {
  admin: 2,
  person: 1,
};

module.exports = (requireAdmin) => {
  return async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    try {
      const decoded = jwt.verify(token, segredo);
      console.log(decoded, decoded.data.role, role.admin);
      if (requireAdmin && decoded.data.role !== role.admin) {
        return res.status(401).json({
          message: 'You have no permission to do this action',
        });
      }
      const user = await userService.checkUserByEmail(decoded.data.email);
      if (user.message) {
        res.status(404).json({ message: 'Erro ao procurar usuario do token.' });
      }
      req.user = decoded.data;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token expirado ou inválido' });
    }
  };
};
