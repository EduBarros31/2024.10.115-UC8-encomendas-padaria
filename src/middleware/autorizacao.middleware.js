class AutorizacaoMiddleware{
      static verificarAutorizacao(req, res, next) {
        const usuario = req.usuario; // O usuário autenticado deve estar disponível no req após a autenticação

        if (!usuario) {
            return res.status(403).json({ msg: "Acesso negado! Usuário não autenticado." });
        }

        // Verifica se o usuário tem o papel necessário para acessar a rota
        if (usuario.papel !== "admin") { // Exemplo: apenas usuários com papel "admin" podem acessar
            return res.status(403).json({ msg: "Acesso negado! Você não tem permissão para acessar esta rota." });
        }

        next(); // Se tudo estiver ok, continua para o próximo middleware ou rota
       
    }

    static verificarPapel(papel) {
        return (req, res, next) => {
            const usuario = req.usuario; // O usuário autenticado deve estar disponível no req após a autenticação

            if (!usuario) {
                return res.status(403).json({ msg: "Acesso negado! Usuário não autenticado." });
            }

            // Verifica se o usuário tem o papel necessário para acessar a rota
            if (usuario.papel !== papel) {
                return res.status(403).json({ msg: `Acesso negado! Você não tem permissão para acessar esta rota como ${papel}.` });
            }

            next(); // Se tudo estiver ok, continua para o próximo middleware ou rota
        };
    }

}

module.exports = AutorizacaoMiddleware