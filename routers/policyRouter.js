const express = require('express');
const router = express.Router();
const controller = require("../controllers/policyController");



router.get('/getAllPolicies',controller.getAllPolicies);

router.get("/:id", controller.getPolicyById);

router.post("/", controller.addPolicy);

router.put("/:id", controller.updatePolicy);

router.delete("/:id", controller.deletePolicy);

module.exports = router;
