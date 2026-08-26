const express = require('express');
const cors = require('cors');
const path = require('path');

// Módulos do backend
const db = require('./backend/config/database');
const usuarioRoutes = require('./backend/routes/usuarioRoutes');
const agendamentoRoutes = require('./backend/routes/agendamentoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Libera requisições externas (como o GitHub Pages)
app.use(express.json()); // Entende dados em formato JSON

// Serve arquivos estáticos da raiz do projeto
app.use(express.static(__dirname));

// Rota de teste
app.get('/api/status', (req, res) => {
    res.json({ mensagem: "Servidor Connect Senac rodando com sucesso!", status: "OK" });
});

// Rotas da API
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/agendamentos', agendamentoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});