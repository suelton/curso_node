var mysql = require('mysql');

module.exports = function(){    
    return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Soluc@o123',
            database: 'portal_noticias'
    });
};
