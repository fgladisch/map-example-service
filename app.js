const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 4000

const { sequelize } = require('./models')
const locations = require('./routes/locations')

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  return next()
})

app.use('/locations', locations)

app.get('/', (req, res) => res.redirect('/locations'))

sequelize.sync()
  .then(() => app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  }))
