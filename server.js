require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Se o server.js estiver na RAIZ do projeto:
const db = require('./backend/config/database');
const usuarioRoutes = require('./backend/routes/usuarioRoutes');
const agendamentoRoutes = require('./backend/routes/agendamentoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Libera o acesso para a sua URL do GitHub Pages
app.use(express.json());

// Serve arquivos estáticos da pasta frontend (opcional se já usar GitHub Pages)
app.use(express.static(path.join(__dirname, 'frontend')));

// Rota de teste para validar se o backend está no ar na Render
app.get('/api/status', (req, res) => {
    res.json({ mensagem: "Servidor Connect Senac rodando com sucesso!", status: "OK" });
});

// Rotas da API
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/agendamentos', agendamentoRoutes); 

// Inicia o servidor escutando a porta dinâmica da Render
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});