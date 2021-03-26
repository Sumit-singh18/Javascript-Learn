console.log("hey this is tut 7");
let btn = document.getElementById("btn");
btn.addEventListener("click", func1);
btn.addEventListener("dblclick", func2);
btn.addEventListener("mousedown", func3);


function func1(e) {
    // console.log("thanks", e)
    e.preventDefault();
}

function func2(e) {
    console.log("thanks its double click", e)
    e.preventDefault();
}

function func3(e) {
    console.log("thanks its mousedown click", e)
    e.preventDefault();
}