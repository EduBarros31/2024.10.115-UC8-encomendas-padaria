const Usuario = require("../models/usuario.model");
const bcrypt = require("bcryptjs");

class UsuarioController {
  static async criarUsuario(req, res) {
    try {
      const { nome, usuarioID, papel, email, senha } = req.body || {};
      // Verifica se todos os campos foram preenchidos
      if (!nome || !usuarioID|| !papel || !email || !senha) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha, 6);
        await Usuario.create({nome, usuarioID, papel, email, senha: senhaCriptografada});
        res.status(200).json({ msg: "Usuário criado com sucesso!" });

    } catch (error) {
      return res.status(500).json({ msg: "Erro do servidor. Tente mais tarde", erro: error.message });
    }
  }


 static async perfil(req,res) {  
    try {
        const { usuarioID } = req.usuario;
        const usuario = await Usuario.findOne({
          where: { usuarioID },
          attributes: ["nome", "email", "usuarioID", "papel"]
        })
        if(!usuario) {
            return res.status(401).json({msg: "Nao existe usuario cadastrado!"})

        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
        
    }

 }



}

module.exports = UsuarioController
