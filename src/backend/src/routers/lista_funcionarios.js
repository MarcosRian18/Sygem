const express = require('express')
const controller = require('../controllers/lista_funcionario_controller.js')
const router = express('router')

router.get('/lista_funcionario', controller.lista_funcionarios)

module.exports = router