const express = require('express');

const router = express.Router()

const AutenticacaoController  = require('../controllers/autenticacao.controller')

// rota publica de login
router.post('/login', AutenticacaoController.login);



// rota para sair 
router.post('/logout', AutenticacaoController.logout);

// rota usada pelo navegador para atualizar o token 
router.post('/refresh-token', AutenticacaoController.refreshToken);

module.exports = router
