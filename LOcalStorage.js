console.log("this is tut 8")

// add a key value inside local storage
localStorage.setItem("Name", "sumit");
localStorage.setItem("Name1", "sumit1");

// retrieve a item from local storage
let name = localStorage.getItem("Name1");
console.log(name);


// to remove a particular key item from local storage
localStorage.removeItem("Name");

// to clear the local storage
// localStorage.clear();