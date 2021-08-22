const { Model, DataTypes } = require('sequelize');

class calculator extends Model {
    static init(connection) {
        super.init({
            calculation: DataTypes.STRING,
            user: DataTypes.STRING,
            result: DataTypes.DECIMAL,
        }, {
            sequelize: connection
        })
    }
}

module.exports = calculator;