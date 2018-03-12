// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function() {
    orm.insertOne(function() {

    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne( function() {
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
