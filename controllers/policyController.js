const { request, response } = require("express");
var policyService = require("../services/policyService");

exports.getAllPolicies=(request,response)=>{
    policyService.getAllPolicies((err,result)=>{
        if(err){
            // console.log("hello1")
            return response.status(500).json(err)
        }
        else{
            response.json(result);
            console.log("Policies fetched .....");
            
        }
    })
}

exports.purchasePolicy=(request,response)=>{
    const {CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        RegistrationDate,TotalPoliciesPurchased}=request.body ;

        policyService.purchasePolicy(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        RegistrationDate,TotalPoliciesPurchased , (err,result)=>{
            
            if(err){
                return response.status(500).json(err);
            }    
            response.json({
                message : "Policy purchased successfully",
                //id : result.insertedvalue
            })
            console.log("data inserted successfully")
    });
};