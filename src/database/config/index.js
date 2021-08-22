module.exports = {
    dialect: 'mariadb',
    host: 'localhost',
    username: 'root',
    password: 'calculatorroot',
    database: 'calculator',
    define: {
        timestamps: true,
        // cria o campo created at e updated at em todas as tabelas
        underscored: true,
        //cria os títulos das colunas com "snake_case"
        freezeTableName: true
        //impede a pluralizacao das colunas
    }
}