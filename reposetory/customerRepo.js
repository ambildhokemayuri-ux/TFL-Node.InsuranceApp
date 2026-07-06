var connection = require("../config/db");



exports.addCustomer=(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        TotalPoliciesPurchased,result)=>{
    
        var sql = "insert into customers (CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,NomineeName,NomineeRelationship,NomineeContactNumber,TotalPoliciesPurchased) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        connection.query(sql, [CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        TotalPoliciesPurchased],result);
};
