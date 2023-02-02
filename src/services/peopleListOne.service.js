const database = require('../models');

const listOnePeople = async (id) => {
  const findOnePeople = await database.Peoples.findOne({ where: { id } });

  return findOnePeople;
};

module.exports = listOnePeople;
