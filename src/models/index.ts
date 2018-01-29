import { Sequelize } from 'sequelize-typescript'
import dbConfig from '../config/db'
import Location from './location'

const sequelize = new Sequelize({
  database: 'boardmap',
  dialect: 'postgres',
  logging: false,
  ...dbConfig
})

sequelize.addModels([
  Location
])

export { sequelize, Location }
