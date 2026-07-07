var express = require('express');
var path = require('path');
var cors = require('cors'); //(Cross-Origin Resource Sharing)cors policy for cross origin resource sharing
var bodyparser =require('body-parser');


//Custom modules

//routers
var policyRouter = require('./routers/policyRouter') 
const customerRouter = require("./routers/customerRouter");
var premiumRouter = require('./routers/premiumRouter')
//var claimRouter = require('./routers/claimRouter')
var app = express();
 

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public'))) ;
app.use(express.json());  

app.use('/api/policies',policyRouter);
app.use("/api/customers", customerRouter);
app.use("/api/premiums", premiumRouter);

//app.use("/api/claims", claimRouter);

/*app.get("/api/policies", (req, res) => {

    const repo = new PolicyRepository();

    res.json(repo.getAllPolicies());
});


// Register Customer
app.post("/api/customers/register", (req, res) => {

    const customer = req.body;

    const manager = new CustomerManager();
    const customerService = new CustomerServiceDepartment();
    const email = new EmailNotificationService();

    manager.on(
        "customerRegistered",
        customerService.onCustomerRegistered.bind(customerService)
    );

    manager.on(
        "customerRegistered",
        email.onCustomerWelcomeEmail.bind(email)
    );

    manager.registerCustomer(customer);

    res.json({
        message: "Customer registered successfully"
    });
});
*/

app.listen(5000, () => {
    console.log("Server listening on port 5000");
});