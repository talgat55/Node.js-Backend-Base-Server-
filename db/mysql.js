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
        connection.query('CREATE TABLE `users` (  `id` INT(11) NOT NULL AUTO_INCREMENT, `name` CHAR(30) NOT NULL, `role` CHAR(30) NOT NULL, PRIMARY KEY(`id`) )', function(err, rows) {
            if (err) {
                if (err.code == "ER_TABLE_EXISTS_ERROR") {

                    console.log("EXIST Table ")
                }else{
                    console.log(err)
                }
                
            } else {

                console.log("successful query")

            }

            connection.release();

        });
    }

    // connected! (unless `err` is set) 
});

module.exports = pool;