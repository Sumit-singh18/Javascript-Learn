
// try {
//     Var a = 11;
// a=23;
// console.warn(a);
// } catch (error) {
//     console.log(error.message)
    
// }



// Doubt 2
// if we use let and const variable in code ? is cosure still work?

function x(e,u,m) {
   let e= 8;
   return function y(){
    let u=5;
    return function z(){
        let m = 4;
        console.log(e+u+m)

    }
    z()
   }
y()
}
   const sum=x()()
   sum()
