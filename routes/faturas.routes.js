const express = require('express');
const {
    buscarTodasFaturas,
    buscarFaturaPorCliente,
    buscarFaturaPorID
} = require('../controller/faturas.controller'); 

const faturaRoutes = (app) => {
    const router = express.Router();

    router.get("/faturas", buscarTodasFaturas);
    router.get("/faturas/buscar", buscarFaturaPorCliente);
    router.get("/faturas/:id", buscarFaturaPorID);

    app.use('/api/fatura', router);
};

module.exports = faturaRoutes;
