const express = require('express');
const router = express.Router();

const controller = require('../controllers/father-controller')

router.post('/', controller.post)
router.delete('/', controller.delete)

module.exports = router;