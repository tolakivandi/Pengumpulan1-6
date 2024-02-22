let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'semester4',
});

connection.connect(function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connection Success');
    }
});

module.exports = connection;
