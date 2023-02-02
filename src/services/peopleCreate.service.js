const database = require('../models');

const peopleCreateService = async (infos) => {
  const { name, active, email, role } = infos;

  const peopleCreate = await database.Peoples.create({
    name,
    active,
    email,
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return peopleCreate;
};

module.exports = peopleCreateService;
