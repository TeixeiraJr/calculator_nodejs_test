const dotenv = require('dotenv').config()

module.exports = {
    dialect: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    define: {
        timestamps: true,
        // cria o campo created at e updated at em todas as tabelas
        underscored: true,
        //cria os títulos das colunas com "snake_case"
        freezeTableName: true
        //impede a pluralizacao das colunas feita pelo sequelize
    }
}