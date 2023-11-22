//FULL PYRAMID --using functions
function starLine(noofrows){
    var answer = " ";
    for (var i =0;i<noofrows;i++){
        answer = answer +"**";
    }
    console.log(answer);
   
}


function starryPattern(noofrows){

    for (var i =0;i<noofrows;i++){
        starLine(i)
    }

   
}




var answer = starryPattern(15);
console.log(answer);
