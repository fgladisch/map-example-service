const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 4000

const { sequelize } = require('./models')
const locations = require('./routes/locations')

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  res.set('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization')
  return next()
})

app.use('/locations', locations)

app.get('/', (req, res) => res.redirect('/locations'))

sequelize.sync()
  .then(() => app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  }))
