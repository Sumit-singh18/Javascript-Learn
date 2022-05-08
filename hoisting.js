/*  Hoisting is a mechanism in JavaScript that moves the declaration of variables and functions at the top. 
 So, in JavaScript we can use variables and functions before declaring them.*/

   
// hoisting   
function codeHoist(){   
    a = 11;   
let b = 50;   
}   
codeHoist();  

function fun(){  
console.log(a); // 11  
console.log(b); // ReferenceError : b is not defined  

} 
fun();
// At the time of function calling the function "fun();" will print the value of variable 'a' 
// that we left undeclared in the definition of function "codeHoist();" 
// This happens because the scope of the variable 'a' is changed to global by the JavaScript 
// itself (or we can say variable a is converted to a global variable) that'swhy the function "fun();"
// but it will not print the value of the variable that we declared using the let keyword. 
//  isable to print the value of the variable. But the function "fun();" isnot able to print the value of variable b because of declaring it using 
//  the "let" keyword due to which its scope gets confined to function definition, and it is not available for any outsider functions.