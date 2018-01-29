import * as Sequelize from 'sequelize'

export default sequelize => sequelize.define('Location', {
  name: Sequelize.STRING,
  latitude: Sequelize.DECIMAL,
  longitude: Sequelize.DECIMAL
})
