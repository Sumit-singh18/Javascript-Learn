console.log("this is my javascript learning time");
document.getElementById("heading").addEventListener("click", function(e) {
    // console.log("you clicked on heading");
    // location.href = "//youtube.com";
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.clientX;
    console.log(variable);

})