const premiumRepo = require("../reposetory/premiumRepo");

exports.getAllPremiums = (result) => {
    premiumRepo.getAllPremiums(result);
};

exports.getPremiumById = (id, result) => {
    premiumRepo.getPremiumById(id, result);
};

exports.addPremium = (
    PolicyId,
    CustomerId,
    AmountPaid,
    PaymentDate,
    PaymentMode,
    TransactionId,
    PaymentFrequency,
    PaymentStatus,
    Remarks,
    result) => {

    if (AmountPaid <= 0) {
        return result({
            message: "Premium Amount should be greater than zero."
        });
    }
    if (!isactivePolicy(PolicyId)) {
        return result({
            message: "Policy is not active. Cannot add premium."
        });
    }


    
    premiumRepo.addPremium(
        PolicyId,
        CustomerId,
        AmountPaid,
        PaymentDate,
        PaymentMode,
        TransactionId,
        PaymentFrequency,
        PaymentStatus,
        Remarks,
        result
    );

};


exports.updatePremium = (
    id,
    AmountPaid,
    PaymentMode,
    PaymentFrequency,
    PaymentStatus,
    Remarks,
    result
) => {

    premiumRepo.updatePremium(
        id,
        AmountPaid,
        PaymentMode,
        PaymentFrequency,
        PaymentStatus,
        Remarks,
        result
    );

};

exports.deletePremium = (id, result) => {

    premiumRepo.deletePremium(id, result);

};