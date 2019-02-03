var express = require('express');
var router = express.Router();
var Access_Check = require('../model/check_access_token');

exports.check_access_token =function(req,res,next){
    if(typeof(req.headers.access_token)){
        Access_Check.getaccesstoken(req.headers.access_token,function(err,data){
            if(err){
                res.json({
                    status:401,
                    message:'Problem in Db Connection,Please Contact with DBA'
                });
            }else{
                if(data.length >=1){
                    next();
                }else{
                    res.json({
                        status:401,
                        message:'Please Check Access Key.'
                    });
                }
            }
        })
    }
    
}