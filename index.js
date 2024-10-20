const express = require('express');
const sequelize = require('./config/database');  
const indexRoute = require('./routes/index.routes');  
const cors = require('cors'); 
const processAllPdfs = require('./pdfextractor')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); 


indexRoute(app); 
processAllPdfs();

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado ao banco de dados com sucesso!');
        console.log(`Servidor rodando na porta ${PORT}`);
    } catch (error) {
        console.error('Erro ao conectar no banco de dados:', error);
    }
});
