const Sequelize = require('sequelize')

module.exports = sequelize => sequelize.define('Location', {
  name: Sequelize.STRING,
  latitude: Sequelize.DECIMAL,
  longitude: Sequelize.DECIMAL
});