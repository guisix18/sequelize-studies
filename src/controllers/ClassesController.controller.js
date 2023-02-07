const database = require('../models')

class ClassesController {
  static async getAllClasses(req, res) {

    const allClasses = await database.Classes.findAll()
    return res.status(200).json(allClasses)

  }

  static async getOneClass(req, res) {
    const { id } = req.params
    const oneClass = await database.Classes.findOne({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(oneClass)

  }

  static async createClass(req, res) {
    const newClass = req.body

    const newClassCreated = await database.Classes.create(newClass)
    return res.status(200).json(newClassCreated)

  }

  static async updateClass(req, res) {
    const { id } = req.params
    const newInfos = req.body

    await database.Classes.update(newInfos, { where: { id: Number(id) } })
    const levelUpdated = await database.Classes.findOne({ where: { id: Number(id) } })
    return res.status(200).json(levelUpdated)

  }

  static async deleteClass(req, res) {
    const { id } = req.params

    await database.Classes.destroy({ where: { id: Number(id) } })
    return res.status(200).json({ message: `ID ${id} deleted with sucess` })

  }

}

module.exports = ClassesController;