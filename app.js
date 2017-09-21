const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 4000

const { sequelize } = require('./models')
const locations = require('./routes/locations')
const accessControl = require('./middleware/access-control')
const errorHandler = require('./middleware/error-handler')

app.use(bodyParser.json())

app.use(accessControl)

app.use('/locations', locations)

app.use(errorHandler)

const start = () => app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

sequelize.sync().then(() => start())
