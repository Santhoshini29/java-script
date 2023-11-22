

/*   variables
In JavaScript, a variable is a named storage location for data. 
You can think of it as a container that holds a value.
 Variables are used to store and manipulate data in your programs.*/

//var (older way, still works):
var variableName = value;

//let (used for variables whose values can be reassigned):
let variableName = value;

//const (used for variables whose values should not be reassigned):
const variableName = value;

// Using let
let message = "Hello, World!";
console.log(message);  // Output: Hello, World!

// Using const
const pi = 3.14159;
console.log(pi);  // Output: 3.14159

// Variables can be updated (if declared with let)
let count = 10;
count = count + 1;
console.log(count);  // Output: 11

//DATATYPES 

// Variables with different datatypes

var userName = "Harkirat" // string
var coursePrice = 5999 // number
var purchased = true // boolean
var completeUserData = { // Object(key-value pairs)
	name : "Harkirat",
	coursePrice : 5999 ,
	purchased : true
}	
var users = [ "Rookie", "Harkirat" ] // array