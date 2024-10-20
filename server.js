const express = require('express');
const sequelize = require('./config/database');  
const Fatura = require('./models/fatura'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.get('/faturas', async (req, res) => {
    try {
        const faturas = await Fatura.findAll();
        res.status(200).json(faturas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as faturas.' });
    }
});

app.get('/faturas/buscar', async (req, res) => {
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
});

app.get('/faturas/:id', async (req, res) => {
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
});

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados com sucesso!');
        console.log(`Servidor rodando na porta ${PORT}`);
    } catch (error) {
        console.error('Erro ao conectar no banco de dados:', error);
    }
});
