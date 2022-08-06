// function currying in javascript using a closure
let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

let res = multiply(2)(3)





