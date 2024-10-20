const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const fatura = sequelize.define('fatura', {
    numero_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mes_referencia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    energia_eletrica_kwh: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    energia_eletrica_valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    energia_sceee_kwh: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    energia_sceee_valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    energia_compensada_kwh: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    energia_compensada_valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    contrib_ilum_publica_valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

fatura.sync();

module.exports = fatura;
