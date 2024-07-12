const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('task_manager', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});


module.exports = sequelize;
