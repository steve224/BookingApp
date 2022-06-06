const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'P@$sw0rd',
    database: 'booking_app'
}

const db = mysql.createConnection(config);

db.connect(function(err){
    if(err) throw err;
    console.log("DB Connected");

});

module.exports = db;