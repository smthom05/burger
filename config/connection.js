// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 connection = mysql.createConnection(port: 3306,
   host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
   user: "xk4otxpteirq1jck",
   password: "hf9gpa5ry90fcm6k",
   database: "burgers_db");
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
