class AutorizacaoMiddleware{
    static autorizar(papeisPermitidos){
        return (req, res, next) => {
            const usuario = req.usuario;

            if (!usuario || !usuario.papel) {
                return res.status(403).json({ mensagem: 'Acesso negado. Usuário não autenticado.' });
            }

            if (papeisPermitidos.includes(usuario.papel)) {
                return next();
            }

            return res.status(403).json({ mensagem: 'Acesso negado. Usuário não autorizado.' });

            }

        };
       
    }


module.exports = AutorizacaoMiddleware