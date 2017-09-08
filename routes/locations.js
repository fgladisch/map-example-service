const express = require('express')

const router = express.Router()

const { Location } = require('../models')
const { wrap } = require('../misc/util')

router.post('/', wrap(async (req, res, next) => {

  const { name, latitude, longitude } = req.body

  const location = await Location.create({ name, latitude, longitude })

  res.send(location)
}))

router.put('/:id', wrap(async (req, res, next) => {

  const id = Number(req.params.id)
  const { name, latitude, longitude } = req.body

  let location = await Location.findById(id)

  if (!location) {
    throw 'Location not found.'
  }

  location = Object.assign(location, { name, latitude, longitude })
  location = await location.save()

  res.send(location)
}))

router.delete('/:id', wrap(async (req, res, next) => {

  const id = Number(req.params.id)

  let location = await Location.destroy({ where: { id } })

  res.status(204).end()
}))

router.get('/:id', wrap(async (req, res, next) => {

  const id = Number(req.params.id)

  const location = await Location.findById(id)

  if (!location) {
    throw 'Location not found.'
  }

  res.send(locations)
}))

router.get('/', wrap(async (req, res, next) => {

  const locations = await Location.findAll()

  res.send(locations)
}))

module.exports = router