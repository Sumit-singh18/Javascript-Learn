// console.log("hello");
// var char;
char = "sumit";
var inte = 45;
// console.log(char, inte)

// type conversion
myvar = String(956)
    // console.log(myvar, (typeof myvar))

mymovie = String(98);
// console.log(mymovie, (typeof mymovie))

// to concadinate string
let html = " html is MY favorite feature";
// console.log(html);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// to concadinate
html = html.concat("    hey this is my string", "hey can you is please");
// console.log(html);
// console.log(html.indexOf("is"))
// console.log(html.lastIndexOf("is"))
// console.log(html.charAt(10));
// console.log(html.endsWith("true"));
// console.log(html.includes("yhss"));
// console.log(html.substring(0, 13));
// console.log(html.slice(-6));
// console.log(html.split("s"))
// console.log(html.replace("is", "my"));  only replace first word
// let time = "sumit";
// let fruit1 = "apple";
// let fruit2 = "orange";
// let myvalue = `hello ${time}
//               <h1>this is my page</h1>
//               <p>you like ${fruit1} and ${fruit2} </p>

//               `;
// document.body.innerHTML = myvalue;


// ARRAY 
const fruit = ['Gello', 'Banana', 'Apple'];
const mixed = [45, 55, 78, 89];
const arr = new Array(34, 78, 'month');
console.log(fruit);
// console.log(mixed);
// console.log(arr);
// console.log(fruit[2]);
// fruit[1] = "mango";
// console.log(fruit);

let value = mixed.indexOf(55);
// console.log(value);

// modifying arrays
//  pushing function in last
mixed.push(66);
// console.log(mixed);

// pushing function in starting
mixed.unshift(56);
// console.log(mixed);


// removing last element in array
mixed.pop();
// console.log(mixed);
// removing first element in array
mixed.shift();
// console.log(mixed);

// removing the element from middel
mixed.splice(0, 2)
    // console.log(mixed);

// for reverse the element
mixed.reverse()
    // console.log(mixed);

// concate
let marks2 = [1, 2, 3, 4, 3];
let marks3 = [4, 5, 6, 6, 5]
marks2 = marks2.concat(marks3);
// console.log(marks2);

// objects
let myobjec = {
        name: "sumit",
        classs: "btech",
        rollno: 590,
        marks: [1, 2],
        "channel sumit.": 548
    }
    // console.log(myobjec.name);
    // console.log(myobjec["channel sumit."]);