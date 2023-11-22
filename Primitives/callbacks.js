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