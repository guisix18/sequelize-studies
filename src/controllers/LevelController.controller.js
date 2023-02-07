const database = require('../models')

class LevelController {
  static async getAllLevels(req, res){
    try {
      const allLevels = await database.Levels.findAll()
      return res.status(200).json(allLevels)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getOneLevel(req, res) {
    const { id } = req.params
    try {
      const getOneLevel = await database.Levels.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(getOneLevel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body
    try {
      const newLevelCreated = await database.Levels.create(newLevel)
      return res.status(200).json(newLevelCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params
    const newInfos = req.body
    try {
      await database.Levels.update(newInfos, { where: { id: Number(id) }})
      const levelUpdated = await database.Levels.findOne( { where: { id: Number(id) }})
      return res.status(200).json(levelUpdated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params
    try {
      await database.Levels.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ message: `ID ${id} deleted with sucess` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = LevelController;