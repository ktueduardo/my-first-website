/*Rota ainda em desenvolvimento!!*/

//Importando modulos
const express = require('express');
const router = express.Router();
const controller = require('../controllers/store-controller')

//Corpo de ação da requisição
router.post('/', controller.post);
router.delete('/:id', controller.delete)

//Torna possivel a importação do arquivo como um modulo
module.exports = router;