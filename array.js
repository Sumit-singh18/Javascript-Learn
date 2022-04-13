// alert("hello");
// var char;
char = "sumit";
var inte = 45;
// alert(char, inte)

// type conversion
myvar = String(956);
// console.log(myvar, (typeof myvar))

mymovie = String(98);
// alert(mymovie, (typeof mymovie))

// to concadinate string
let html = "html my is MY favorite feature";
// alert(html);
// alert(html.lastIndexOf("is"))

// alert(html.toLowerCase());
// alert(html.toUpperCase());

// to concadinate
html = html.concat("hey this is my string", "hey can you is please");
// alert(html);
// alert(html.indexOf("string"))
// alert(html.lastIndexOf("is"))
// alert(html.charAt(10));
// alert(html.endsWith("true"));
// alert(html.includes("my"));
// alert(html.substring(0, 16));
// alert(html.slice(-9));
// alert(html.split("s"))
// alert(html.replace("is", "my"));  only replace first word

let time = "sumit";
let fruit1 = "apple";
let fruit2 = "orange";
let myvalue = `hello ${time} you like ${fruit1} and ${fruit2} `;
// document.body.innerHTML = myvalue;

// ARRAY
const fruit = ["Gello", "Banana", "Apple"];
const mixed = [45, 55, 78, 89];
const arr = new Array(34, 78, "month");
// alert(fruit);
// alert(mixed);
// alert(arr);
// alert(fruit[2]);
// fruit[1] = "mango";
// alert(fruit);

let value = mixed.indexOf(55); // to find out the index 
// alert(value);

// modifying arrays

//  pushing function in last
mixed.push(66);
// alert(mixed);

// removing last element in array
mixed.pop();
// alert(mixed);

// pushing function in starting
mixed.unshift(56);
// alert(mixed);

// removing first element in array
mixed.shift();
// alert(mixed);

// removing the element from middel
mixed.splice(3);
// alert(mixed);

// for reverse the element
mixed.reverse();
// alert(mixed);

// concate
let marks2 = [1, 2, 3, 4, 3];
let marks3 = [4, 5, 6, 6, 5];
marks2 = marks2.concat(marks3);
// alert(marks2);

// objects
let myobjec = {
  name: "sumit",
  classs: "btech",
  rollno: 590,
  marks: [1, 2],
  "channel sumit": 548,
};
// alert(myobjec.name);
// alert(myobjec["channel sumit"]);
