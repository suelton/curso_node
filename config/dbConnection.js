var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com banco de dados foi estabelecida.');
    return mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'Soluc@o123',
                database: 'portal_noticias'
        });
};

module.exports = function() {
    console.log('o autoload carregou o módulo de conexão com o banco de dados.')    
    return connMySQL;    
};
