const Calculator = require('../database/models/Calculator');
const { findallCalcs, findOneUserAllCalcs , createCalc} = require('../database/repository/calculator');

module.exports = {

    async indexall( req , res ) {
        const users = await findallCalcs();
        return res.json(users)
    },

    async indexforname( req , res ) {
        const username = req.params;
        const usercalcs = await findOneUserAllCalcs(username);
        return res.json(usercalcs)
    },
    
    async store(req, res) {
        try {
        const { calculation, user }= req.body;
        const result = eval(calculation);
        const calculator = await createCalc({ calculation, user, result })
        return res.json(calculator)
    }
        catch (error) {
            return res.status(400).json({ errors: [{ title: 'Error', message: 'Expressão inválida' }] })
        }
    }
}