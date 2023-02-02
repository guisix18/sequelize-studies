const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.controller');
const emailVerificationMiddleware = require('../middlewares/emailVerification.middleware');
const idVerificationMiddleware = require('../middlewares/idVerification.middleware');

const route = Router();

route.post('', emailVerificationMiddleware, PeopleController.create);
route.get('', PeopleController.listAll);
route.get('/:id', idVerificationMiddleware, PeopleController.listOne);

module.exports = route;
