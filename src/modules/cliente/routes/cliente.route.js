const express = require('express')

const router = express.Router()

const ClienteController = require('../controllers/cliente.controller')

router.post('/cadastrar', ClienteController.cadastrar)

router.get('/listar', ClienteController.listarClientes)

router.put('/atualizar/:id', ClienteController.atualizarCliente)

router.get('/listar/:id', ClienteController.listarClientePorId)

router.delete('/excluir/:id', ClienteController.excluirCliente)

module.exports = router