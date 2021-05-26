console.log('this is fetch api practise');

let mybtn = document.getElementById('mybtn')

// div with id mycont
let mycont = document.getElementById('mycont')

// function getdata() {
//     url = 'ajax.txt';
//     fetch(url).then((response) => {
//         return response.text();
//     }).then((data) => {
//         console.log(data);
//     })
// }
getdata();

// get requiest by fetch api
function getdata() {
    url = 'https://api.github.com/users';
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}
// post request
function postdata() {

    url = 'https://jsonplaceholder.typicode.com/posts';
    data = '{"name":"sumitdcsdctttt","salary":"123","age":"23"}'
    params = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response => response.json())
        .then(data => console.log(data));
}
postdata();