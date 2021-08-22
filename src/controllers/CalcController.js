const Calculator = require('../database/models/Calculator');

module.exports = {

    async indexall( req , res ) {
        const users = await Calculator.findAll();

        return res.json(users)

    },

    async indexforname( req , res ) {
        const username = req.params;
        const usercalcs = await Calculator.findAll({where: username});

        return res.json(usercalcs)

    },
    

    async store(req, res) {
        const { calculation, user } = req.body;

        const calculator = await Calculator.create({ calculation, user, result })

        return res.json(calculator)
    }
}