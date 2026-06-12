const mongoose=require('mongoose');
const chatschema=new mongoose.Schema({
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    message:{
        type:String
    },
    created_at:{
        type:Date
    }
    
});
const chat= mongoose.model("chat",chatschema);
module.exports=chat;
