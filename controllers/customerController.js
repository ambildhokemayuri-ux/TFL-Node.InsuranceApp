const { request, response } = require("express");
var customerService = require("../services/customerService");

var handlers = require("./handler");
var event = require("events");// inbuilt module
var emitter = new event.EventEmitter();


// Get All
exports.getAllCustomers = (req, res) => {

    customerService.getAllCustomers((err, data) => {

        if (err)
            return res.status(500).send(err);

        res.json(data);

    });

};

// Get By Id
exports.getCustomerById = (req, res) => {

    customerService.getCustomerById(req.params.id, (err, data) => {

        if (err)
            return res.status(500).send(err);

        res.json(data);

    });

};

/*exports.addCustomer=(request,response)=>{
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
*/




// Add Customer
exports.addCustomer = (req, res) => {

    customerService.addCustomer(

        req.body.CustomerCode,
        req.body.FirstName,
        req.body.LastName,
        req.body.DateOfBirth,
        req.body.Gender,
        req.body.Email,
        req.body.MobileNumber,
        req.body.Address,

        (err, data) => {

            if (err)
                return res.status(500).send(err);

            res.json({
                message: "Customer Added Successfully"
            });

                if (data) {
                                emitter.emit("customerAdded", {
                                    policyId: req.body.PolicyId,
                                    data
                                });
                                console.log('Customer Added Event Emitted');
                            }
                
                
                        });
                
                };
                
                emitter.on("customerAdded", handlers.Emailsend);
                emitter.on("customerAdded", handlers.SMSsend);
                emitter.on("customerAdded", handlers.CustomerAddedDocument);



// Update Customer
exports.updateCustomer = (req, res) => {

    customerService.updateCustomer(

        req.params.id,

        req.body.FirstName,
        req.body.LastName,
        req.body.Email,
        req.body.MobileNumber,
        req.body.Address,

        (err, data) => {

            if (err)
                return res.status(500).send(err);

            res.json({
                message: "Customer Updated Successfully"
            });

                            if (data) {
                                        emitter.emit("customerUpdated", {
                                        policyId: req.body.PolicyId,
                                        data
                                    });
                                    console.log('Customer Updated Event Emitted');
                                }
                    
                    
                            });
                    
                    };
                    
                    emitter.on("customerUpdated", handlers.Emailsend);
                    emitter.on("customerUpdated", handlers.SMSsend);
                    //emitter.on("customerUpdated", handlers.CustomerUpdatedDocument);

// Delete Customer
exports.deleteCustomer = (req, res) => {

    customerService.deleteCustomer(

        req.params.id,

        (err, data) => {

            if (err)
                return res.status(500).send(err);

            res.json({
                message: "Customer Deleted Successfully"
            });

        });

};