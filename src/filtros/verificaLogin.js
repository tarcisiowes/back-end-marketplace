const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');
const knex = require('../conexao')

const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Não autorizado');
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, senhaHash);

        const logado = await knex('usuarios').where({id});
       

        if (logado === 0) {
            return res.status(404).json('Usuario não encontrado');
        }

        const usuarios = logado[0]

        const { senha, ...usuario } = usuarios;

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(400).json(`deu ruim aqui ${error.message}`);
    }
}

module.exports = verificaLogin