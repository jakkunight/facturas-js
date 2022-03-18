const mysql = require('mysql');
const { promisify } = require('util');

const db = mysql.createPool({
    host: "db4free.net",
    port: "3306",
    database: "db_tests",
    user: "jakku_kun",
    password: "2ab+aa+bb"
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