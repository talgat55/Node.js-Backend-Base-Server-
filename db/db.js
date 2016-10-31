import config from "./../config/config.json"

console.log("choose db: %s", config.database_type)
if (config.database_type == "postgres") { // Postgress

    /// let potgress = require("./postgress.js")

} else if (config.database_type == "mysql") { //   Mysql

    // let mysql = require("./mysql.js")
    //  let createSchema = require("./schemas/mysql/users.js")(mysql)

} else if (config.database_type == "mongodb") {
    let mongo = require("./mongo.js")

} else {

    console.log("error choose DB")

}