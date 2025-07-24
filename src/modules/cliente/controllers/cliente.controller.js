const Cliente = require("../models/cliente.model")
const bcrypt = require("bcryptjs")

class ClienteController{
    static async cadastrar(req, res) {
        try {
            const { nome, telefone, email, senha } = req.body;
            if (!req.body || Object.keys(req.body).length === 0) { // Verifica se o corpo está vazio
                return res.status(400).json({ msg: "O corpo da requisição não pode estar vazio!" });
            }
            if (!nome || !telefone || !email || !senha) {
                return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
            }

            // criptografando a senha
            const senhaCriptografada = await bcrypt.hash(senha, 6);
            await Cliente.create({ nome, telefone, email, senha: senhaCriptografada });
            res.status(200).json({ msg: 'Cliente cadastrado com sucesso' });
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message });
        }
    }

    static async atualizarCliente(req, res) {
        try {
            const { id } = req.params; // Corrigido de req.cliente para req.params
            const { nome, telefone, email } = req.body;
            if (!nome || !telefone || !email) {
                return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
            }
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return res.status(404).json({ msg: "Cliente não encontrado!" });
            }
            await cliente.update({ nome, telefone, email });
            res.status(200).json({ msg: "Cliente atualizado com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message });
        }
    }

    static async listarClientes(req, res) {
        try {
            const Clientes = await Cliente.findAll({
                attributes: ['id', 'nome', 'email', 'telefone']
            });
            if (Clientes.length === 0) {
                return res.status(401).json({ msg: "Não existe Cliente cadastrado!" });
            }
            res.status(200).json(Clientes); // Corrigido de Cliente para Clientes
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' });
        }
    }

    static listar(req, res) {
        res.status(200).json({ mensagem: 'Listando clientes...' });
    }

    static async listarClientePorId(req, res) {
        try {
            const { id } = req.params;
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return res.status(404).json({ msg: "Cliente não encontrado!" });
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message });
        }
    }

    static async excluirCliente(req, res) {
        try {
            const { id } = req.params; // Corrigido de req.cliente para req.params
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return res.status(404).json({ msg: "Cliente não encontrado!" });
            }
            await cliente.destroy();
            res.status(200).json({ msg: "Cliente excluído com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message });
        }
    }
}

module.exports = ClienteController

