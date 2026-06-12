const express =require("express");
const app= express();
const mongoose=require('mongoose');
const path=require("path");
const chat=require("./models/chat");
app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');
main()
  .then((res)=>{
    console.log("connnection successsful");
})
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
app.listen(8080,()=>{
  console.log("server listening at 8080");
});
app.get("/",(req,res)=>{
  res.send("working successful")
});
app.get("/chats", (req,res)=>{
  let chats= chat.find();
  console.log(chats);
  res.render("hello.ejs",{chats});
});
let chat1=new chat({
    from:"delhi",
    to:"kanyakumari",
    message:"travelling",
    created_at:new Date()
});
chat1.save().then((res)=>{
    console.log(res);
});
chat.find().then((res)=>{
  console.log(res);
 })