/*Falta desenvolver o sistema de upload de arquivos*/

const express = require('express');
const router = express.Router();

const controller = require('../controllers/puppy-controller')

router.get('/', controller.get)
router.post('/', controller.post)
router.delete('/:id', controller.delete)

module.exports = router;