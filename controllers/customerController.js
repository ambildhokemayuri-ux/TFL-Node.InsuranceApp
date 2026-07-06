const { request, response } = require("express");
var customerService = require("../services/customerService");

var handlers = require("./handler");
var event = require("events");// inbuilt module
var emitter = new event.EventEmitter();



exports.addCustomer=(request,response)=>{
    const {CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        TotalPoliciesPurchased}=request.body ;

        customerService.addCustomer(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        TotalPoliciesPurchased, (err,result)=>{
            
            if(err){
                return response.status(500).json(err);
            }

            // emit an event after successful purchase
            emitter.emit('addCustumer', {
                CustomerCode,
                FirstName,
                LastName
                });

            response.json({
                message : "Customer registered entry created successfully",
                data: result
            });
            console.log("data inserted successfully")
    });
};

emitter.on("addCustumer",handlers.Emailsend);
emitter.on("addCustumer",handlers.SMSsend);