const { Sequelize } = require('sequelize');
require('dotenv').config(); 
const pg = require('pg');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: 'postgres',
    dialectModule: pg
});


module.exports = sequelize;
