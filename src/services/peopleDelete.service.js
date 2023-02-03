const database = require("../models");

const deletePeople = async (id) => {
    await database.Peoples.destroy({where: {id}});

    return;
}

module.exports = deletePeople;