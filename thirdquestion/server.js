const express=require("express");
const bodyParser=require("body-parser");
let alert = require('alert'); 


const app=express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post('/',function(req,res){
    var username=req.body.username;

    alert("Welcome ," + username);
    
})

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});



