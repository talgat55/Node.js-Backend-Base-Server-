import config from "./../config/config.json"


if (config.database_type == "postgres") { // Postgress

    let potgress = require("./postgress.js")

} else if (config.database_type == "mysql") { //   Mysql

    // work //  let mysql = require("./mysql.js")

} else if (config.database_type == "mongodb") {
    // work //  let mongo = require("./mongo.js")

} else {

    console.log("error choose dtabase")

}