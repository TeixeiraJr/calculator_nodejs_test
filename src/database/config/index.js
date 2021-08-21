module.exports = {
    dialect: 'mariadb',
    host: 'localhost' ,
    username: 'root',
    password: 'calculatorroot',
    database: 'calculator',
    define: {
        underscored: true
        //cria os títulos das colunas com "snake_case"
    }
}