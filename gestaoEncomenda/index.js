const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const { sequelize } = require('./src/config/configDB');
const authRoute = require('./src/modules/autenticacao/routes/autenticacao.route')
const usuarioRoute = require('./src/modules/usuario/routes/usuario.route')
const encomendaRoute = require('./src/modules/encomenda/routes/encomenda.route');

// Configuração do banco de dados
dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const app = express();
app.use(cors({
origin: 'http://localhost:5173',
credentials: true
}))

app.use(express.json()); // Middleware para analisar JSON

app.use('/api', authRoute);

app.use('/api/', usuarioRoute);

app.use('/api/', encomendaRoute);



const PORTA = process.env.PORTA;
app.listen(PORTA, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ force: true, alter: true });
        console.log('Banco de dados sincronizado com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', error);
    }
    console.log(`Servidor rodando na porta ${PORTA}`);
});