// callback to promise 

// callback 
function medicine1Get(){
    console.log("medicine 1 received ");
}

setTimeout(medicine1Get,1000)
// to promise - - 

function medicine1Get(){
    return new Promise(function(resolve){
        setTimeout(resolve,1000)
    })
   
}

medicine1Get().then(function(){
    console.log("medicine 1 received ");
})
//other form 
function promiseBody(resolve){
    setTimeout(resolve,10000);
}
function medicine1Get(){
var answer = new Promise(promiseBody);
return answer;
}

var medicine = medicine1Get();
console.log (medicine);
// example 
function PromiseBody(resolve){
    setTimeout(resolve,5000);
}
function medicine1Get(){
    var answer = new promise (PromiesBody)
    return answer;
}
function printThing(){
console.log("medicine 1 received !!");
}
var medicine = medicine1Get();
medicine.then(printThing)