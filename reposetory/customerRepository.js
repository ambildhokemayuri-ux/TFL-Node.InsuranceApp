

const connection = require("../config/db");

// Get All Customers
exports.getAllCustomers = (result) => {
    connection.query("SELECT * FROM customers", result);
};

// Get Customer By Id
exports.getCustomerById = (id, result) => {
    connection.query(
        "SELECT * FROM customers WHERE CustomerId=?",
        [id],
        result
    );
};

// Add Customer
exports.addCustomer = (
    CustomerCode,
    FirstName,
    LastName,
    DateOfBirth,
    Gender,
    Email,
    MobileNumber,
    Address,
    result
) => {

    const sql = `
        INSERT INTO customers
        (
            CustomerCode,
            FirstName,
            LastName,
            DateOfBirth,
            Gender,
            Email,
            MobileNumber,
            Address
        )
        VALUES (?,?,?,?,?,?,?,?)
    `;

    connection.query(
        sql,
        [
            CustomerCode,
            FirstName,
            LastName,
            DateOfBirth,
            Gender,
            Email,
            MobileNumber,
            Address
        ],
        result
    );
};

// Update Customer
exports.updateCustomer = (
    id,
    FirstName,
    LastName,
    Email,
    MobileNumber,
    Address,
    result
) => {

    const sql = `
        UPDATE customers
        SET
            FirstName=?,
            LastName=?,
            Email=?,
            MobileNumber=?,
            Address=?
        WHERE CustomerId=?
    `;

    connection.query(
        sql,
        [
            FirstName,
            LastName,
            Email,
            MobileNumber,
            Address,
            id
        ],
        result
    );
};

// Delete Customer
exports.deleteCustomer = (id, result) => {

    connection.query(
        "DELETE FROM customers WHERE CustomerId=?",
        [id],
        result
    );

};



/*var connection = require("../config/db");



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
*/
