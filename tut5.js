// const { selectors } = require("sizzle");

let a = document;
a = document.all;
// a = document.forms;
// console.log(a);

// element selectors
// 1.single element selector
// 2.multiple element selector

let element = document.getElementById("heading");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = " yellow";
// element.innerText = "sumit singh ";
element.innerHTML = "<b> sumit is goooddd</b>"
    // console.log(element);

let sel = document.querySelector("h1");
sel.style.color = "blue";
sel.querySelector("child");
// console.log(sel);


// multiple element selector
let em = document.getElementsByClassName("child");
em = document.getElementsByClassName("container");

// console.log(em[0].getElementsByClassName("child"));
let cont = document.querySelector(".hi");
cont = document.querySelector(".container");
let nodename = cont.children[2].nodeName;
let nodetype = cont.children[1].nodeType;
// console.log(nodetype);
// console.log(nodename);
// node type
// 1.element
// 2.attributes
// 3.text node
// 8.comment
// 9.document
// 10. doctype
// console.log(cont.childNodes);
// console.log(cont.children);
let container = document.querySelector("div.container");
console.log(container.children[1].children);