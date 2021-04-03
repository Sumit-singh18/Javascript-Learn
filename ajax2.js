document.getElementById('button1').addEventListener('click', loaduser);
document.getElementById('button2').addEventListener('click', loadusers);

function loaduser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function() {
        if (this.status == 200) {
            // TO get full details of the user 
            // console.log(this.responseText); 

            // to GEt particular detail of the user like name , mail.
            var user = JSON.parse(this.responseText);
            console.log(user.name);

            var output = '';
            output += '<ul>' +
                '<li> id : ' + user.id + '</li>' +
                '<li> name : ' + user.name + '</li>' +
                '<li> email : ' + user.email + '</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;
        }
    }
    xhr.send();


}

function loadusers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function() {
        if (this.status == 200) {
            // TO get full details of the user 
            // console.log(this.responseText); 

            // to GEt particular detail of the user like name , mail.
            var users = JSON.parse(this.responseText);
            console.log(users.name);

            var output = '';
            for (var i in users) {
                output += '<ul>' +
                    '<li> id : ' + users[i].id + '</li>' +
                    '<li> name : ' + users[i].name + '</li>' +
                    '<li> email : ' + users[i].email + '</li>' +
                    '</ul>';
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}