function sumAll(startingindex,endingindex){
    var sum= 0;
    for(var i=startingindex;i<endingindex;i++){
        sum+=i;
    }
   // console.log(sum)
    return sum;
}
   var sum =sumAll(1,50);
   console.log(sum);
