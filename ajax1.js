console.log("This is Ajax tutorial");
document.getElementById("button").addEventListener("click", loadtext);

function loadtext() {
    console.log("button clicked");

    // create a xhr object
    var xhr = new XMLHttpRequest();

    //  create a open - type,url/file,asynch
    xhr.open('GET', 'ajax.txt', true);
    console.log('READYSTATE', xhr.readyState)

    // optional on progress 
    xhr.onprogress = function() {
        console.log('please wait')
    }

    //  create a onload
    xhr.onload = function() {
        // this is checkpoint to check in which state our request is
        console.log('READYSTATE', xhr.readyState)
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        }
    }


    // this is optional  on ready state function 
    // xhr.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // }



    // Send request
    xhr.send();
}