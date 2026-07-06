const { request, response } = require("express");
var policyService = require("../services/policyService");

var handlers = require("./handler");
var event = require("events");// inbuilt module
var emitter = new event.EventEmitter();


exports.getAllPolicies=(request,response)=>{
    policyService.getAllPolicies((err,result)=>{
        if(err){
            // console.log("hello1")
            return response.status(500).json(err)
        }
        else{
            response.json(result);
            console.log("Policies fetched .....");
            
        }
    })
}

