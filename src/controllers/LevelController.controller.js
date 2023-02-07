const database = require('../models')

class LevelController {
  static async getAllLevels(req, res) {

    const allLevels = await database.Levels.findAll()
    return res.status(200).json(allLevels)
  }

  static async getOneLevel(req, res) {
    const { id } = req.params

    const getOneLevel = await database.Levels.findOne({
      where: {
        id: Number(id)
      }
    })
    return res.status(200).json(getOneLevel)
  }

  static async createLevel(req, res) {
    const newLevel = req.body

    const newLevelCreated = await database.Levels.create(newLevel)
    return res.status(200).json(newLevelCreated)
  }

  static async updateLevel(req, res) {
    const { id } = req.params
    const newInfos = req.body

    await database.Levels.update(newInfos, { where: { id: Number(id) } })
    const levelUpdated = await database.Levels.findOne({ where: { id: Number(id) } })
    return res.status(200).json(levelUpdated)
  }

  static async deleteLevel(req, res) {
    const { id } = req.params

    await database.Levels.destroy({ where: { id: Number(id) } })
    return res.status(200).json({ message: `ID ${id} deleted with sucess` })

  }
}

module.exports = LevelController;