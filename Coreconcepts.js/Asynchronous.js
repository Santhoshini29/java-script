 //sum function 

 const fs = require('fs');
 function sum(n){

    let sum =0;
    for (var i=0;i<n;i++){
        sum +=i;
    }
     console.log (sum)
 }
  
 sum(50);
 //assigning ascync task --- read from a file using nodejs lib

 function fileIsRead(err,fileContent){
   sum(fileContent);
   console.log("file is read gave final answer");
 }
 fs.readFile("hii.txt",'utf8',fileIsRead); 
 
 


//other synchronous tasks 
 console.log("Hello");
 sum(21);
 sum(20);