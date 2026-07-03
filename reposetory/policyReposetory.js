var connection = require("../config/db");

exports.getAllPolicies=(result)=>{
    var sql = "select * from policies";
    connection.query(sql, result);
    // console.log("hello 3");
};

exports.purchasePolicy=(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        RegistrationDate,TotalPoliciesPurchased,result)=>{
    
        var sql = "insert into customers (CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,NomineeName,NomineeRelationship,NomineeContactNumber,RegistrationDate,TotalPoliciesPurchased) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        connection.query(sql, [CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        RegistrationDate,TotalPoliciesPurchased],result);
};
