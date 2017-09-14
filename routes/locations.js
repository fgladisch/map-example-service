const express = require('express')

const router = express.Router()

const { Location } = require('../models')

router.post('/', async (req, res, next) => {

  try {

    const { name, latitude, longitude } = req.body

    const location = await Location.create({ name, latitude, longitude })

    res.send(location)

  } catch (err) {
    next(err.message)
  }

})

router.put('/:id', async (req, res, next) => {

  try {

    const id = Number(req.params.id)
    const { name, latitude, longitude } = req.body

    let location = await Location.findById(id)

    if (!location) {
      throw new Error('Location not found.')
    }

    location = Object.assign(location, { name, latitude, longitude })
    location = await location.save()

    res.send(location)

  } catch (err) {
    next(err.message)
  }

})

router.delete('/:id', async (req, res, next) => {

  try {

    const id = Number(req.params.id)

    let location = await Location.destroy({ where: { id } })

    res.status(204).end()

  } catch (err) {
    next(err.message)
  }

})

router.get('/:id', async (req, res, next) => {

  try {

    const id = Number(req.params.id)

    const location = await Location.findById(id)

    if (!location) {
      throw new Error('Location not found.')
    }

    res.send(locations)

  } catch (err) {
    next(err.message)
  }

})

router.get('/', async (req, res, next) => {

  try {

    const locations = await Location.findAll({ where: { x: 1 } })

    res.send(locations)

  } catch (err) {
    next(err.message)
  }

})

module.exports = router