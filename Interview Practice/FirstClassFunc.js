// function statement AKA function declaration
function a(){
    console.log("Function Statement AKA Declaration || It is nothing a but a norml function statement  decelaration sign ")
}
a()

// Function Expression 
var b = function(){ 
    console.log("Functtion Expression || Storing a function into a variable is called as function expression")
}
b()


// Anonyms Function
//  we can use anonyms function without giving name to the function
// document.addEventListener('click', function(){
//     console.log('button clicked')
//     })   
    
// Difference between Argument And Parametre

function c(param1,param2){
    Val = `param is above argument is below ${param1} and ${param2}`
    console.log(Val)
}
c(1,14)


// first class function / first class citizen  = Ablity to use function as a value
// Example 1 
function sum() {
    return function(){
        console.log(2+3)
    }
}
sum()()


// example 2


  