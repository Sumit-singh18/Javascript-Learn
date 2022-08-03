 // Q1 - What is Eval in Javascript
// The eval() method evaluates or executes an argument.
// If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.
let x = 10;
let y = 20;
let text = "x * y";
let result = eval(text);


// Never use eval function  
// Executing JavaScript from a string is an BIG security risk.

// With eval(), malicious code can run inside your application without permission.

// With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

//  use this way 
// let x = 10;
// let y = 20;
// let text = "x * y";
// let result = text;


