const express = require('express');
const UsuarioController = require('../controllers/usuario.controller');
const AutenticacaoMiddleware = require('../middleware/usuario.middleware');

const router = express.Router();

// Rota para criar um usuário
router.post('/criar', UsuarioController.criarUsuario);

router.get('/perfil', AutenticacaoMiddleware.autenticarToken, UsuarioController.perfil);

module.exports = router;