const mysql = require('mysql');
const { promisify } = require('util');

const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    database: "db",
    user: "user",
    password: "password"
});

db.getConnection((err, connection) => {
    if(!connection || err){
        console.log("[DB -> getConnection()] FATAL ERROR.");
        console.log(err);
        return -1;
    }else{
        console.log("[DB -> getConnection()] DATABASE CONNECTED.");
    }
});

db.query = promisify(db.query);

module.exports = db;