//basic program

var user = [
{naame :"Santhoshini",age :21},
{naame :"Rohith",age :18}

];

for (var i=0;i<user.length;i++) {
    console.log(user[i].naame+"'s age is "+user[i].age)
}

 // const toLog= (user[i].naame+"'s age is "+user[i].age);
 //console.log(toLog)

  //using function 
  function PrintAllUsers(users){
    for (var i=0;i<user.length;i++) {
        console.log(user[i].naame+"'s age is "+user[i].age);
  }
}