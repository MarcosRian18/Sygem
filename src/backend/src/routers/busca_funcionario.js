const express = require('express')
const controller = require('../controllers/busca_funcionario')
const router = express('router')

router.get('/busca_funcionario', controller.get)

module.exports = router