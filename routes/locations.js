const express = require('express')

const router = express.Router()

const { Location } = require('../models')

const { create, update, destroy, findOne, findAll } = require('../controllers/locations')

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', destroy)

router.get('/:id', findOne)

router.get('/', findAll)

module.exports = router