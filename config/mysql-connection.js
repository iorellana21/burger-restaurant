// call MySQL
const mysql = require('mysql');

// connect to burgers_db
const database = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "iorellana",
    database: "burgers_db"
});

// just confirming connection
// can also call other functions after confirming
database.connect((err) => {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected!");
});

// export to be used in other files
module.exports = database;