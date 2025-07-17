const express = require('express')

const router = express.Router()

const EncomendaController  = require('../controllers/encomenda.controller')

// rota publica de login
router.post('/cadastrar', EncomendaController.criarEncomenda);

// rota para listar todas as encomendas
router.get('/listar', EncomendaController.listarEncomendas);

router.get('/listar/:id', EncomendaController.listarEncomendaPorId);
// rota para atualizar encomenda
router.put('/atualizar/:id', EncomendaController.atualizarEncomenda);

// rota para excluir encomenda
router.delete('/excluir/:id', EncomendaController.excluirEncomenda);




module.exports = router

