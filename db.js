const Sequelize = require('sequelize')

const sequelizeAuthenticate = () => {
  // Option 1: Passing parameters separately
  const sequelize = new Sequelize('test', 'admin', '852338', {
    host: 'localhost',
    dialect: 'mysql'
  })

  sequelize
    .authenticate()
    .then(() => {
      console.log('DB Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
}

module.exports = sequelizeAuthenticate
