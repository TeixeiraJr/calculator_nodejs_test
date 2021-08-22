exports.executeCalc = (req, res, next) => {
    const calculation = req.body.calculation;
    result = eval(calculation);
    req.result = result;
    return next();
}