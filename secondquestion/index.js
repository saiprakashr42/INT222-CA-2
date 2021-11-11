var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";


MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("mydb");
    dbo.createCollection("student",function(err,res){
        if(err) throw err;
        console.log("Collection created");
        db.close();
    })

    var myObj=[
        {name:"saiprakash",regno:11803828,grade:"A"},
        {name:"mansa",regno:11802838,grade:"A"},
        {name:"Naruto",regno:11801235,grade:"A"},
        {name:"Sukumar",regno:11802568,grade:"A"},
        {name:"Sasuke",regno:11809878,grade:"A"},
    ]

    dbo.collection("student").insertMany(myObj,function(err,res){
        if(err){
            throw err
        }else{
            console.log("5 documents has been inserted. ")
        }
    })

   
})