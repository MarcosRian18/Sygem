const express = require('express')
const controller = require('../controllers/create_funcionario_controller')
const router = express('router')

router.post('/create_funcionario', controller.create_funcionarios)

module.exports = router