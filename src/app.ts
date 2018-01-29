import { Application } from 'express'
import * as express from 'express';
import * as bodyParser from 'body-parser'

import config from './config/server'
import { sequelize } from './models'
import locations from './routes/locations'
import accessControl from './middleware/access-control'
import errorHandler from './middleware/error-handler'

const app: Application = express()

app.use(bodyParser.json())

app.use(accessControl)

app.use('/locations', locations)

app.use(errorHandler)

const start = () => app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}`))

sequelize.sync().then(() => start())
