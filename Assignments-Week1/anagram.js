// converting a string to array 
function arrayFromString(str){
    var array = str.split(" ");
    return array;
}
var answer = arrayFromString("My Name is Santhoshini");
console.log(answer)
 
//converting string from arary
function stringFromArray(str){
    
var result =str.join(" ");
    return  result;
}
var answer = stringFromArray([ 'My', 'Name', 'is', 'Santhoshini' ]
)
console.log(answer);

  function sort(str){
    var array =str.split("");
   array =array.sort();
   var sortedArray= array.join("");
   return sortedArray;
  }
   function isAnagram(str1,str2){
     if(sort(str1) == sort(str2)){
        return true;
     } else {
        return false;
     }
     }
   var ans = isAnagram("hii","hello");
   console.log(ans);
   //methos 2
   