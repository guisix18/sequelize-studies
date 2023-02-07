const { Router } = require('express')
const LevelController = require('../controllers/LevelController.controller')

const router = Router()
router
 .get('', LevelController.getAllLevels)
 .get('/:id', LevelController.getOneLevel)
 .post('', LevelController.createLevel)
 .put('/:id', LevelController.updateLevel)
 .delete('/:id', LevelController.deleteLevel)
module.exports = router