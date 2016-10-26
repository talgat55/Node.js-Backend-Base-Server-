//import config from "./../config/config.json"
//import pgp from "pg-promise"
var pgp = require("pg-promise")( /*options*/ );

let configuration = {
    "user": "postgres",
    "database": "todo",
    "password": "postgres",
    "port": "5432",
    "host": "localhost"
}


var db = pgp(configuration);
db.connect()
    .then(obj => {
        sco = obj;
        sco.client.on('notification', data => {
            console.log('Received:', data);
            // data.payload = 'my payload string'
        });
        return sco.none('LISTEN $1~', 'my-channel');
    })
    .catch(error => {
        console.log('Error:', error);
    });
module.exports = db;