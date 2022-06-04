// immediatly invoked function  expression
// 1.The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2.The second part creates the immediately invoked function expression () through 
// which the JavaScript engine will directly interpret the function.

// in arrow Function

(
    (aame) => { 
        console.log(`this is ${aame}`);
 }
)('Sumittt')

(
    (aName) => {
        console.log(`hi this is ${aName}`);
    }
)('Sumit')


//  Doubt: We cannot run the function twice why ?