var policyRepo=require("../reposetory/policyReposetory");

exports.getAllPolicies=(result)=>{
    // console.log("hello2");
    policyRepo.getAllPolicies(result);
    // console.log("hello2");
}

exports.purchasePolicy=(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        RegistrationDate,TotalPoliciesPurchased,result)=>{
    // console.log("hello2");
    
    policyRepo.purchasePolicy(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        RegistrationDate,TotalPoliciesPurchased,result);
    // console.log("hello2");
}
