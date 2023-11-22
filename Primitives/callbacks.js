// function using function as a parameter /argument 

function sum (index1,index2){

return index1+index2;
}


function sub(index1,index2){

    return index1-index2;
    }
    
    function mul (index1,index2){

        return index1 * index2;
        }
        
        function div (index1,index2){

            return index1/index2;
            }
            
                   

// var answer = mul (2,5);
// console.log(answer);



function doArithmetic (firstEl,secondEl, arithmeticfn){
                         
         return   arithmeticfn(firstEl,secondEl);
            }    

var answer = doArithmetic(1,2,mul); 
                        console.log(answer);



        //example to callbacks 
        
        // From this
function doArithmetic(firstEl, secondEl, whatToDo) {
	
	if(whatToDo === "sum") {
		var answer = sum(firstEl, secondEl);
		return answer;
	}

	if(whatToDo === "multiply") {
		var answer = multiply(firstEl, secondEl);
		return answer;
	}

}

// To this
function doArithmetic(firstEl, secondEl, funToRun){
	return funToRun(firstEl, secondEl);
}