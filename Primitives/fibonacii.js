function fibonacii(start,end){
var sum=0;
for(var i=start;i<=end;i++){
 sum=sum+i;
}
return sum
}
var user= fibonacii(1,3);
console.log(user);