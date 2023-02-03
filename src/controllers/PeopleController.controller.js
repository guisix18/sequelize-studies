const database = require('../models');
const peopleCreateService = require('../services/peopleCreate.service');
const deletePeople = require('../services/peopleDelete.service');
const listOnePeople = require('../services/peopleListOne.service');
const updatePeople = require('../services/peopleUpdate.service');

class PeopleController {
  static async create(req, res) {
    const people = req.body;

    const createPeople = await peopleCreateService(people);

    return res.status(200).json(createPeople);
  }

  static async listAll(req, res) {
    const people = await database.Peoples.findAll();

    return res.status(200).json(people);
  }

  static async listOne(req, res) {
    const { id } = req.params;
    const onePeople = await listOnePeople(id);

    return res.status(200).json(onePeople);
  }

  static async update(req, res) {
    const { id } = req.params;
    const newInfos = req.body;

    const peopleUpdated = await updatePeople(id, newInfos);

    return res.status(200).json(peopleUpdated);
  }

  static async delete(req, res) {
    const { id } = req.params;

    await deletePeople(id);

    return res.status(200).json({message: `ID ${id} deleted with sucess`});
  }
}

module.exports = PeopleController;
