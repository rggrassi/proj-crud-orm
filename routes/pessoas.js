const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoas')
const model = require('../models/index')

router.get('/', pessoasController.index.bind(null, model.models))
router.get('/create', pessoasController.createForm)
router.post('/create', pessoasController.createProcess.bind(null, model.models))

module.exports = router