const faturaRoutes = require('./faturas.routes');  // Corrigir caminho para o arquivo

function indexRoute(app) {
    faturaRoutes(app);
}

module.exports = indexRoute;
