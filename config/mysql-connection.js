// call MySQL
var mysql = require('mysql');
var database;

if(process.env.JAWSDB_URL){
    database = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    database = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "iorellana",
        database: "burgers_db"
    });
}

// just confirming connection
// can also call other functions after confirming
database.connect((err) => {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + database.threadId);
});

// export to be used in other files
module.exports = database;