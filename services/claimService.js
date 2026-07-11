const claimRepo = require("../reposetory/claimRepo");
const policyRepo = require("../reposetory/policyReposetory");

exports.getAllClaims = (result) => {
    claimRepo.getAllClaims(result);
};

exports.getClaimById = (id, result) => {
    claimRepo.getClaimById(id, result);
};

exports.addClaim = (

                        PolicyNumber,
                        CustomerId,
                        ClaimDate,
                        ClaimType,
                        Reason,
                        ClaimAmount,
                        ApprovedAmount,
                        Status,
                        Remarks,
                        SettlementDate,
                        result

                    ) => {

    // Check Policy Exists

    policyRepo.getPolicyByNumber(PolicyNumber, (err, policyData) => {

        if (err)
            return result(err);

        const policy = Array.isArray(policyData)
            ? policyData[0]
            : policyData;

        if (!policy) {

            return result({
                message: "Policy Not Found"
            });

        }

        claimRepo.addClaim(

            PolicyNumber,
            CustomerId,
            ClaimDate,
            ClaimType,
            Reason,
            ClaimAmount,
            ApprovedAmount,
            Status,
            Remarks,
            SettlementDate,
            result

        );

    });

};

exports.updateClaim = (

    id,
    ApprovedAmount,
    Status,
    Remarks,
    SettlementDate,
    result

) => {

    claimRepo.updateClaim(

        id,
        ApprovedAmount,
        Status,
        Remarks,
        SettlementDate,
        result

    );

};

exports.deleteClaim = (id, result) => {

    claimRepo.deleteClaim(id, result);

};