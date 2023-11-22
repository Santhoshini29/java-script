//two four pattern
function patternCreation(noofrows){

    for (var i=0;i<noofrows;i++){
        var str = " ";
        for  (var j=0;j<i+1;j++){
           str = str +"**";
        }

        console.log (str)
    }
}
var answer =patternCreation(10);
console.log(answer)