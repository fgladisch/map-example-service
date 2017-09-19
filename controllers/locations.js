const express = require('express')

const router = express.Router()

const { Location } = require('../models')

const create = async (req, res, next) => {

  try {

    const { name, latitude, longitude } = req.body

    const location = await Location.create({ name, latitude, longitude })

    res.send(location.toJSON())

  } catch (err) {
    next(err.message)
  }

}

const update = async (req, res, next) => {

  try {

    const id = Number(req.params.id)
    const { name, latitude, longitude } = req.body

    let location = await Location.findById(id)

    if (!location) {
      throw new Error('Location not found.')
    }

    location = Object.assign(location, { name, latitude, longitude })
    location = await location.save()

    res.send(location.toJSON())

  } catch (err) {
    next(err.message)
  }

}

const destroy = async (req, res, next) => {

  try {

    const id = Number(req.params.id)

    await Location.destroy({ where: { id } })

    res.status(204).end()

  } catch (err) {
    next(err.message)
  }

}

const findOne = async (req, res, next) => {

  try {

    const id = Number(req.params.id)

    const location = await Location.findById(id)

    if (!location) {
      throw new Error('Location not found.')
    }

    res.send(location.toJSON())

  } catch (err) {
    next(err.message)
  }

}

const findAll = async (req, res, next) => {

  try {

    const locations = await Location.findAll()

    res.send(locations)

  } catch (err) {
    next(err.message)
  }

}

module.exports = {
  create,
  update,
  destroy,
  findOne,
  findAll
}