const Calculator = require('../models/Calculator');

exports.findallCalcs = () => {
    return Calculator.findAll()
};

exports.findOneUserAllCalcs = (user) => {
  return Calculator.findAll({where: user})
};

exports.createCalc = ({ calculation, user, result }) => {
  return Calculator.create({ calculation, user , result })
};

exports.VerifyIfUserExist = (user) => {
  return Calculator.findOne({where: user})
};