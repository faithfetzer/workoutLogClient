const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/workout-log-2');

module.exports = sequelize;