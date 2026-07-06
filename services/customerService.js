var customerRepo=require("../reposetory/customerRepo");



exports.addCustomer=(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        TotalPoliciesPurchased,result)=>{
    // console.log("hello2");
    
    customerRepo.addCustomer(CustomerCode,FirstName,LastName,DateOfBirth,Gender,Email,
        MobileNumber,AddressLine1,AddressLine2,City,State,PostalCode,
        Country,PanNumber,AadhaarNumber,Occupation,AnnualIncome,
        NomineeName,NomineeRelationship,NomineeContactNumber,
        TotalPoliciesPurchased,result);
    // console.log("hello2");
}
