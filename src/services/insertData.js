//contains functions that contains db logic
 const DB = require("../utils/dbConnection");

function insertData(data, callback){
    callback(1, {result: "remove this line, only for test."})
    // Save the data to MongoDB
     DB.insertMany(data); 
}

module.exports = insertData;