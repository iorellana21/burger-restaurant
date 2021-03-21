// call database from mysql-connection
const database = require('../config/mysql-connection');

// create MySQL query methods to be used to retrieve and store data in burgers_db
// selectAll()
// insertOne()
// updateOne()

const orm = {
    all: function(col1){
        let query = "SELECT * FROM ??";

        database.query(query, [col1], (err, result) => {
            if(err) console.log(err);

            console.log(result);
        });
    }
}

module.exports = orm;
