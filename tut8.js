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
localStorage.clear();


// to store the value in array use json.strngify
// let impArr = ["java", "python", "css"]
// localStorage.setItem("lang", JSON.stringify(impArr));


// // to retrieve the data in array use json.parse()
// impArr = JSON.parse(localStorage.getItem("lang"));
// console.log(impArr);


// // SESSION STORAGE

// // TO SET THE DATA IN SESSON STORAGE
// sessionStorage.setItem("Name", "ssumit");
// sessionStorage.setItem("Name1", "ssumit1");


// // TO CLEAR SESSION STORAGE
// sessionStorage.clear();