var policyRepo=require("../reposetory/policyReposetory");

exports.getAllPolicies=(result)=>{
    // console.log("hello2");
    policyRepo.getAllPolicies(result);
    // console.log("hello2");
}


exports.getPolicyById = (id, result) => {
    policyRepo.getPolicyById(id, result);
};

exports.addPolicy = (
    PolicyNumber,
    CustomerId,
    PolicyType,
    PolicyAmount,
    IsRenewed,
    result
) => {

    policyRepo.addPolicy(
        PolicyNumber,
        CustomerId,
        PolicyType,
        PolicyAmount,
        IsRenewed,
        result
    );

};

exports.updatePolicy = (id,PolicyType, PolicyAmount,IsRenewed, result) => {

policyRepo.updatePolicy(id,PolicyType,PolicyAmount,IsRenewed, result);

                };

exports.deletePolicy = (id, result) => {
    policyRepo.deletePolicy(id, result);
};