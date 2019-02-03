var db=require('../dbconfig');

var Access_token ={
    getaccesstoken : function(access_key,callback){
        return db.query("SELECT * FROM api_access where access_key=? and status=1",[access_key],callback);
    }
}

module.exports=Access_token;