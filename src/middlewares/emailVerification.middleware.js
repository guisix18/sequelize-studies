const database = require('../models');

const emailVerificationMiddleware = async (req, res, next) => {
  const { email } = req.body;

  const peopleWithSameEmail = await database.Peoples.findOne({
    where: { email },
  });

  if (peopleWithSameEmail) {
    return res
      .status(400)
      .json({ message: 'This email is already being used.' });
  }

  next();
};

module.exports = emailVerificationMiddleware;
