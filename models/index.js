const Sequelize = require('sequelize')
const dbConfig = require('../config/db')

const options = {
  dialect: 'postgres',
  logging: false
}

const sequelize = new Sequelize('boardmap', dbConfig.username, dbConfig.password, options)

const Location = require('./location')(sequelize)

module.exports = { sequelize, Location }
