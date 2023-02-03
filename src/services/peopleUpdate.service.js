const database = require("../models");

const updatePeople = async (id, infos) => {
    await database.Peoples.update(infos, {where: {id}})

    const findPeople = await database.Peoples.findOne({where: {id}});

    return findPeople;
} 

module.exports = updatePeople;