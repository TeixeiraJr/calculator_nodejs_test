const { VerifyIfUserExist} = require('../database/repository/calculator');

exports.verifyUsername = (req, res, next) => {
    const name = req.body.user;
    if (!name) return res.status(400).json({ errors: [{ title: 'Error', message: 'Nome Inválido' }] , })
    return next()
}

exports.isUsername = async (req, res, next) => {
    const username = req.params;
    const isUser =  await VerifyIfUserExist(username);
    if (!isUser) return res.status(400).json({ errors: [{ title: 'Error', message: 'Usuário não encontrado' }] , })
    return next();
}

exports.isValidAccount =(req, res, next) => {
    const username = req.body.calculation;
    if (!username) return res.status(400).json({ errors: [{ title: 'Error', message: 'Expressão inválida' }] , })
    return next();
}
