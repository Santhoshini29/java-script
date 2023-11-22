// half pyramid 
function createPattern(noofrows){

    for (var i=0;i<noofrows;i++){
   var string = " ";
        for (var j=0;j<i+1;j++){
          string =string +"* ";
        }
        console.log(string)
    }

}

 createPattern(10);
 // var answer =createPattern(10);
// console.log(answer);