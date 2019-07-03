// Set up MySQL connection.
var mysql = require("mysql");
var connection;

connection = mysql.createConnection({
    host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "v1ipivoz0rgav8ld",
    password: "yo472142xsy1srea",
    database: "c6zmu6o62dtm9w7q"

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
//         port: 3306,
//         user: "v1ipivoz0rgav8ld",
//         password: "yo472142xsy1srea",
//         database: "c6zmu6o62dtm9w7q"
    });
// };

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;