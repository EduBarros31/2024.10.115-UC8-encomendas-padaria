const Usuario = require("../models/usuario.model");
const bcrypt = require("bcrypt");

class UsuarioController {
  static async criarUsuario(req, res) {
    try {
      const { nome, email, senha } = req.body;
      if (!nome || !email || !senha) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }
        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        await Usuario.create({nome, email, senha: senhaCriptografada});
        res.status(200).json({ msg: "Usuário criado com sucesso!" });

    } catch (error) {
      return res.status(500).json({ msg: "Erro ao criar usuário", erro: error.message });
    }
  }
 static async perfil(req,res) {  
    try {
        const usuario = await Usuario.findAll();
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


