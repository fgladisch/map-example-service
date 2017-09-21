const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const config = require('./config/server')
const { sequelize } = require('./models')
const locations = require('./routes/locations')
const accessControl = require('./middleware/access-control')
const errorHandler = require('./middleware/error-handler')

app.use(bodyParser.json())

app.use(accessControl)

app.use('/locations', locations)

app.use(errorHandler)

const start = () => app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}`))

sequelize.sync().then(() => start())
