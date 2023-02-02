const database = require('../models');
const peopleCreateService = require('../services/peopleCreate.service');
const listOnePeople = require('../services/peopleListOne.service');

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

  static async update(req, res) {}

  static async delete(req, res) {}
}

module.exports = PeopleController;
