const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('faturas', 'postgres', 'v96160770', {
    host: 'localhost',          
    dialect: 'postgres',
});

module.exports = sequelize;
