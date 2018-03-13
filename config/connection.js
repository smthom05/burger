// Set up MySQL connection.
var mysql = require("mysql");

var connection;

var dbLink = "mysql://xk4otxpteirq1jck:hf9gpa5ry90fcm6k@e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/seundtxzr5uitvd5"

if (process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 connection = mysql.createConnection(dbLink);
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
