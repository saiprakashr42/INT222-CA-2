const fs=require('fs');


const textIn=fs.readFileSync('./files/test.txt','utf-8');

if(textIn==""){
    console.log("File is empty");
}else{
    fs.appendFileSync('./files/test1.txt',textIn);
    console.log(textIn);
}



