//# Require config options and check connection also create tables
//import config from "./../config/config.json"
import mysql from "mysql"
let config;
var pool = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: "password",
    database: "server_node"
});

pool.getConnection(function(err, connection) {

    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    } else {
        console.log('connected successful as id ' + connection.threadId);

    }

    // connected! (unless `err` is set) 
});

module.exports = pool;