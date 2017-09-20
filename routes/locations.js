const express = require('express')

const router = express.Router()

const { Location } = require('../models')

const { create, update, destroy, findOne, findAll } = require('../controllers/locations')
const validateLocation = require('../middleware/validate-location')

router.post('/', validateLocation, create)

router.put('/:id', validateLocation, update)

router.delete('/:id', destroy)

router.get('/:id', findOne)

router.get('/', findAll)

module.exports = router