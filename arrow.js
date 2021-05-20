console.log('This is arrow function tutorial');

// one liner does not require braces or return 
const first = () => 'Good evening sumit';
console.log(first());

let second = () => {
    console.log('hey sumit good night');
}
second();

// single object do not require parenthesis
const greet = name => 'hey ' + name;
console.log(greet('sumit'));

// double object  require parenthesis
const greeting = (name, end) => 'hey ' + name + end;
console.log(greeting('sumit', ' bye'));