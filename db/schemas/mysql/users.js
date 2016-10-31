module.exports = (connection) => {

    connection.query('CREATE TABLE `users` (  `id` INT(11) NOT NULL AUTO_INCREMENT, `name` CHAR(30) NOT NULL, `role` CHAR(30) NOT NULL, PRIMARY KEY(`id`) )', function(err, rows) {
        if (err) {
            if (err.code == "ER_TABLE_EXISTS_ERROR") {

                console.log("EXIST Table ")
            } else {
                console.log(err)
            }

        } else {

            console.log("successful query")

        }

        connection.release();

    });
}