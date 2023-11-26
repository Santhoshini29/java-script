// readfrom a file 
const fs =require ('fs');

function fileIsRead(err,filecontent){
  Sum(filecontent)
  console.log("file is read gave final answer")
}
fs.readFile("hii.txt",'utf8',fileIsRead)
// setTimeout 
function printToScreen(){
console.log("done")
}
 setTimeout(printToScreen,1000)
setInterval(printToScreen,1000)

//normal to  promise 
function medicine1Get(){
  console.log("medicine 1 recevied");
}
setTimeout(medicine1Get,1000)
// - - - - - -  - - - - - - - - - - - - - - - PROMISE METHOD - - - - - - 
function medicine1Get(){
  return new Promise(function (resolve){
setTimeout(resolve,10000);
  })
}
medicine1Get().then(function(){
  console.log("medicine 1 recived ");
})

// - - - - - - - - - - - - -  - - - - - -- - - -  - - - - - - - - - - - - - -

