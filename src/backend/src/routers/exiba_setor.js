const express = require('express')
const controller = require('../controllers/exiba_setor_controller.js')
const router = express('router')

router.get('/setores', controller.exiba_setor)


module.exports = router;