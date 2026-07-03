const express = require('express');
const router = express.Router();
const controller = require("../controllers/policyController");



router.get('/getAllPolicies',controller.getAllPolicies);
//router.put('/updatecustomer/:id',controller.updateCustomer);
router.post('/purchasePolicy',controller.purchasePolicy);
//router.delete('/delete/:id',controller.deleteCustomer);


module.exports=router;
