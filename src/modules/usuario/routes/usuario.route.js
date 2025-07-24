const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const AutenticacaoMiddleware = require('../../../middleware/autenticacao.middleware');

const router = express.Router();


// Rota para criar um usuário



router.post('/cadastrar', UsuarioController.criarUsuario);

router.get('/perfil', AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil);



module.exports = router;