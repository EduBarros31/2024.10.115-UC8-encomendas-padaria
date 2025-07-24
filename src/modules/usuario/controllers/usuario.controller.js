const Usuario = require("../models/usuario.model");
const bcrypt = require("bcryptjs");

class UsuarioController {
  static async criarUsuario(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json({ msg: "Corpo da requisição ausente ou inválido. Envie como JSON." });
      }
      const { nome, papel, email, senha } = req.body;
      if (!nome || !papel || !email || !senha) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }
      const senhaCriptografada = await bcrypt.hash(senha, 10);
      const usuario = await Usuario.create({ nome, papel, email, senha: senhaCriptografada });
    
      res.status(200).json({ msg: "Usuário criado com sucesso!", usuario });
    } catch (error) {
      return res.status(500).json({ msg: "cadastro? Erro do servidor. Tente mais tarde", erroR: error.message });
    }
  }

  static async perfil(req, res) {
    try {
      const { id } = req.usuario;
      const usuario = await Usuario.findOne({
        where: { id },
        attributes: ["nome", "email", "id", "papel"]
      });
      if (!usuario) {
        return res.status(401).json({ msg: "Nao existe usuario cadastrado!" });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ msg: 'Erro do servidor. Tente novamente mais tarde!' });
    }
  }
}

module.exports = UsuarioController