console.log("This is Ajax tutorial");

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("you clicked fetch button");
    // Instanstate on the xhr object
    const xhr = new XMLHttpRequest();

    // open the xhr object
    xhr.open("GET", "sumit.txt", true);

    // // on progress message (optional)
    xhr.onprogress = function() {
        console.log("on progress please wait");
    };
    // when response is ready
    xhr.onload = function() {
        console.log(this.responseText);
    };
    //   send  
    xhr.send();
}