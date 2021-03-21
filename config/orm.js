// call database from mysql-connection
var database = require('./mysql-connection');

// create MySQL query methods to be used to retrieve and store data in burgers_db
// selectAll()
// insertOne()
// updateOne()

var orm = {
    all: function(tableInput, cb){
        let query = "SELECT * FROM ??;";

        database.query(query, [tableInput], (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    create: function (table, values, cb) {
        let query = "INSERT INTO ?? SET ?";

        console.log(query);

        database.query(query, [table, values], (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update: function (table, values, condition, cb) {
        let query = "UPDATE ?? SET ? WHERE ?";

        console.log(query);

        database.query(query, [table, values, condition], (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
