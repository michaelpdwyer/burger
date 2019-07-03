// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var env = process.env.JAWSDB_URL;

var connection;

if (env) {
    connection = mysql.createConnection(env);
  } else {
    connection = mysql.createConnection({
      host: "k2pdcy98kpcsweia.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
      port: 3306,
      user: "v1ipivoz0rgav8ld",
      password: "vi4vf5dbyx4f33ei",
      database: "c6zmu6o62dtm9w7q"
    });
  }

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;