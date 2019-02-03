var db=require('../dbconfig');

var Authentication ={
     getuser: function(uc,callback){
        var paramter = [uc.user_name,uc.password];
        return db.query("SELECT * FROM backend_user where user_name=? And password=?",paramter,callback);
    }
}

module.exports=Authentication;