const Usuario = require("../models/usuario.model");
const bcrypt = require("bcryptjs");

class UsuarioController {
  static async criarUsuario(req, res) {
    try {
      const { nome, papel, email, senha} = req.body;
      if (!nome  || !email || !senha || !papel) {
        return res.status(400).json({ msg: "Todos os campos devem serem preenchidos!" });
      }

        // Criptografa a senha
        const senhaCriptografada = await bcrypt.hash(senha, 6);
        await Usuario.create({nome, papel, email, senha: senhaCriptografada});
        res.status(200).json({ msg: "Usuário criado com sucesso!" });

    } catch (error) {
      return res.status(500).json({ msg: "Erro do servidor. Tente mais tarde", erro: error.message });
    }
  }


  


 static async perfil(req,res) {  
    try {
        const email = req.usuario;
        const usuario = await Usuario.findOne({
          where: {email},
          attributes: ['nome', 'email']
        })
        if(!usuario) {
            return res.status(401).json({msg: "Nao existe usuario cadastrado!"})

        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({msg: 'Erro do servidor. Tente novamente mais tarde!'})
        
    }

 }
 static async listar(req,res) {
   res.status(200).json({mensagem: 'Listando Usuarios...'})

 }


}

module.exports = UsuarioController


