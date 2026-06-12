const mongoose=require('mongoose');
const chat=require("./models/chat");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
let allchats=[
    {
        from:"madhya pradesh",
        to:"gujarat",
        message:"hello",
        created_at:new Date()
    },
    {
        from:"haryana",
        to:"gujarat",
        message:"hello",
        created_at:new Date()
    },
    {
        from:"kerala",
        to:"gujarat",
        message:"hello",
        created_at:new Date()
    }
    
]
chat.insertMany(allchats);