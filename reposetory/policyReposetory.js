var connection = require("../config/db");

exports.getAllPolicies=(result)=>{
    var sql = "select * from policies";
    connection.query(sql, result);
    // console.log("hello 3");
};

