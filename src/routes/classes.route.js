const { Router } = require('express')
const ClassesController = require('../controllers/ClassesController.controller');

const router = Router()
router
 .get('', ClassesController.getAllClasses)
 .get('/:id', ClassesController.getOneClass)
 .post('', ClassesController.createClass)
 .put('/:id', ClassesController.updateClass)
 .delete('/:id', ClassesController.deleteClass)
module.exports = router