const Sequelize = require('sequelize')
const dbConfig = require('../config/db')

const dbOptions = {
  dialect: 'postgres',
  logging: false
}

const sequelize = new Sequelize('boardmap', dbConfig.username, dbConfig.password, dbOptions)

const Location = require('./location')(sequelize)

module.exports = { sequelize, Location }
