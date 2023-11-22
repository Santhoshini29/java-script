function completeStarLine(n){
 var str = "";
 for (var i=0;i<n;i++){
    str =str +"*";
 }
 console.log(str);
}

function partialStarLine(n){
    var str = "";
    str = str +"*";
    for (i=0;i<n-2;i++){
        str = str +" ";
    }
    str =str +"*";
    console.log(str);
}

function hallowPattern(n){
    completeStarLine(n);

    for (var i=0;i<n-2;i++){
        partialStarLine(n)
    }
                                            
     completeStarLine(n);
}

hallowPattern(10)
//var answer = hallowPattern(10);
//console.log(answer)