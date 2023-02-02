const database = require('../models');

const idVerificationMiddleware = async (req, res, next) => {
  const { id } = req.params;

  (await database.Peoples.findOne({ where: { id } }))
    ? next()
    : res.status(400).json({ message: 'ID Invalid' });
};

module.exports = idVerificationMiddleware;
