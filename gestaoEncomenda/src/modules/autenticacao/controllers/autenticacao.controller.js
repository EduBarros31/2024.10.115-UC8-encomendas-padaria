const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const Usuario = require("../../usuario/models/usuario.model");




class AutenticacaoController {
    
    static gerarTokenAcesso(dadosUsuario) {
        return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
            expiresIn: tempo_refresh_token,
          });
    }
    static gerarRefreshToken(dadosUsuario) {
        return jwt.sign(dadosUsuario, process.env.SECRET_KEY, {
            expiresIn: tempo_refresh_token,
          });
    }
    static async login(req, res){
        try {
            const { email, senha } = req.body;
            if(!email, !senha) {
                return res.status(400).json({ msg: "É necessario informar email e senha para login" })
            }
            const usuario = await Usuario.findOne({
                where: { id },
              });
              if (!usuario) {
                return res.status(401).json({ msg: "Usuario não encontrado!" });
              }
              const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
              if (!senhaCorreta) {
                return res.status(400).json({ msg: "E-mail ou senha incorreto!" });
              }
              const dadosUsuario = {
                nome: usuario.nome,
                papel: "usuario",
              };


        } catch (error) {
            
        }
    }









}
    