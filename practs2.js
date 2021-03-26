let edit = document.getElementById('edit');
console.log(edit);

edit.addEventListener('dblclick', func1);
//when user double clicks on the text
function func1() {
    let i = document.createElement('input');
    i.id = "inputid";
    i.type = "text";

    i.innerText = "";
    edit.appendChild(i);

    let u = document.getElementById("inputid");
    u.addEventListener('click', func2);
    // when user clicks on The  entered value
    function func2() {
        let getval = u.value;
        localStorage.setItem('Data Entered', getval);
    }

}