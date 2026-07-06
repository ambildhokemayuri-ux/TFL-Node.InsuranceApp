const express = require('express');
const router = express.Router();
const controller = require("../controllers/customerController");



//router.get('/getAllCustomers',controller.getAllCustomers);
router.post('/addCustomer',controller.addCustomer);
//router.post('/purchasePolicy',controller.purchasePolicy);
//router.delete('/delete/:id',controller.deleteCustomer);


module.exports=router;
