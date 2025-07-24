const EncomendaModel = require('../../../modules/encomenda/models/encomenda.model');
const UsuarioModel = require('../../../modules/usuario/models/usuario.model');
const ClienteModel = require('../../../modules/cliente/models/cliente.model')


class EncomendaController {

    static  async criarEncomenda(req, res) {
       try {
        const { clienteID, produtoID, produto_nome, quantidade, data_entrega, status } = req.body;
        if (!clienteID || !produtoID || !produto_nome || !quantidade || !data_entrega || !status) {
            return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
        }
        const cliente = await ClienteModel.findByPk(clienteID); 
        if (!cliente) {
            return res.status(404).json({ msg: "Cliente não encontrado!" });
        }
        const produto = await UsuarioModel.findByPk(produtoID);
        if (!produto) {
            return res.status(404).json({ msg: "Produto não encontrado!" });
        }
        
        const novaEncomenda = await EncomendaModel.create({
            clienteID,
            produtoID,
            produto_nome,
            quantidade,
            data_entrega,
            status
        });
        res.status(201).json({ msg: "Encomenda criada com sucesso!", encomenda: novaEncomenda });
       } catch (error) {
        res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!', erro: error.message });
        
       }
    }

    static async listarEncomendas(req, res) {
        try {
            const encomendas = await EncomendaModel.findAll();
            if (encomendas.length === 0) {
                return res.status(404).json({ msg: "Nenhuma encomenda encontrada!" });
            }
            res.status(200).json(encomendas);
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' });
        }
    }

    static async listarEncomendaPorId(req, res) {
        try {
            const id = req.params.id;
            const encomenda = await EncomendaModel.findByPk(id);
            if (!encomenda) {
                return res.status(404).json({ msg: "Encomenda não encontrada!" });
            }
            res.status(200).json(encomenda);
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' });
        }
    }

    static async atualizarEncomenda(req, res) {
        try {
            const id = req.params.id;
            const { cliente, produto, quantidade, data_entrega, status } = req.body;
            const encomenda = await EncomendaModel.findByPk(id);
            if (!encomenda) {
                return res.status(404).json({ msg: "Encomenda não encontrada!" });
            }
            await encomenda.update({ cliente, produto, quantidade, data_entrega, status });
            res.status(200).json({ msg: "Encomenda atualizada com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' });
        }
    }

    static async excluirEncomenda(req, res) {
        try {
            const id = req.params.id;
            const encomenda = await EncomendaModel.findByPk(id);
            if (!encomenda) {
                return res.status(404).json({ msg: "Encomenda não encontrada!" });
            }
            await encomenda.destroy();
            res.status(200).json({ msg: "Encomenda excluída com sucesso!" });
        } catch (error) {
            res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' });
        }
    }




}

module.exports = EncomendaController;