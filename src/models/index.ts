import locationFactory from './location'

import * as Sequelize from 'sequelize'
import dbConfig from '../config/db'

const dbOptions: any = {
  dialect: 'postgres',
  logging: false
}

const sequelize = new Sequelize('boardmap', dbConfig.username, dbConfig.password, dbOptions)

const Location = locationFactory(sequelize)

export { sequelize, Location }
