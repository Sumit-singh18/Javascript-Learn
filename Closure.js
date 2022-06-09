// function along with its lexical scope bundle forms a closure

// it is 1st example
// function x() {
//     var a =9;
//     function y() {
//      console.log(a)
//     }

//     y();
// }

// x();



// 2nd exammple 

function x() {
    var a = 9;
    function y() {
        var g = 900;
        function s() {
            console.log(a,g);
        }
         s();
    }
     y();
}
x();

// uses of closure:

// currying 
// function like once
// setTimeout
// iterate 
// memoize


