/*  Hoisting is a mechanism in JavaScript that moves the declaration of variables and functions at the top. 
 So, in JavaScript we can use variables and functions before declaring them.*/

//  watch Namstey javascript hoisting and let & const video for all your doubt
   
// hoisting 

// temporal deadzone - It means when the variable is assigned a memory but value of that variable is not Initilize then the time b/w that is known as
// temporal deadzone

// function codeHoist(){   
//  a = 11;   
//  let b = 50;   
//   a+b;
// }   
// codeHoist();  


// function fun(){  
// console.log(a); // 11  
// console.log(b); // ReferenceError : b is not defined  

// } 
// fun();
console.log(a)
var a = 10;
let y =100;


// let and const are also hoisted but in temporal deadzone


// At the time of function calling the function "fun();" will print the value of variable 'a' 
// that we left undeclared in the definition of function "codeHoist();" 
// This happens because the scope of the variable 'a' is changed to global by the JavaScript 
// itself (or we can say variable a is converted to a global variable) that'swhy the function "fun();"
// but it will not print the value of the variable that we declared using the let keyword. 
//  is able to print the value of the variable. But the function "fun();" isnot able to print the value of variable b because of declaring it using 
//  the "let" keyword due to which its scope gets confined to function definition, and it is not available for any outsider function