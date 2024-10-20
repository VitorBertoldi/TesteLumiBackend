const Fatura = require('../models/fatura'); 

const buscarTodasFaturas = async (req, res) => {
    try {
        const faturas = await Fatura.findAll();
        res.status(200).json(faturas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as faturas.' });
    }
};

const buscarFaturaPorCliente = async (req, res) => {
    const { numero_cliente, mes_referencia } = req.query;

    const where = {};

    if (numero_cliente) {
        where.numero_cliente = numero_cliente;
    }

    if (mes_referencia) {
        where.mes_referencia = mes_referencia;
    }

    try {
        const faturas = await Fatura.findAll({ where });
        if (faturas.length > 0) {
            res.status(200).json(faturas);
        } else {
            res.status(404).json({ message: 'Nenhuma fatura encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as faturas.' });
    }
};

const buscarFaturaPorID = async (req, res) => {
    const { id } = req.params;
    try {
        const fatura = await Fatura.findByPk(id);
        if (fatura) {
            res.status(200).json(fatura);
        } else {
            res.status(404).json({ message: 'Fatura não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar a fatura.' });
    }
};

module.exports = {
    buscarTodasFaturas,
    buscarFaturaPorCliente,
    buscarFaturaPorID,
};
