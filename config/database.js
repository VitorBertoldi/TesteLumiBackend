const { Sequelize } = require('sequelize');
require('dotenv').config(); // Certifique-se de que isso esteja no início do seu arquivo

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true, 
            rejectUnauthorized: false 
        }
    },
});

module.exports = sequelize;
