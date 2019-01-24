var express = require("express");
var router = express.Router();
var Auth = require('../../model/authentication_model')

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource in get aswel");
});

router.post("/", function(req, res, next) {
  console.log('1');
  if(typeof(req.body.user_name)&& typeof(req.body.password)){
    console.log('2');
    Auth.getuser(req.body, function(err,data){
      if(err){
        res.json({
          status:401,
          message:'Problem in Db Connection,Please Contact with DBA'
        });
      }else{
        if(data.length==1){
          console.log(data[0].status);
          if(data[0].status == 1){
            res.json({
              status:200,
              message:'Record Found',
              data :{
                'id':data[0].id,
                'name':data[0].name,
                'user_name':data[0].user_name,
                'type':data[0].type,
                'created_date':data[0].created_date,
                'last_updated':data[0].last_updated,
                'status':data[0].status,
              }
            });
          }else{
            res.json({
              status:204,
              message:'User Not Active, Please Contact Adminstrator.'
            });
          }
        }else{
          res.json({
            status:400,
            message:'Please Check Your Credentials'
          });
        }
      }
    });
  }
});

module.exports = router;
