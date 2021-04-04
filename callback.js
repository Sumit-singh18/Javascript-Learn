console.log('this is call back function practise')

const students = [
    { name: 'sumit', subject: 'Javascript' },
    { name: 'navi', subject: 'Python' },
    { name: 'navu', subjct: 'HTML' }

]

function enrollstudent(student) {
    setTimeout(function() {
        studentss.push(student);

    }, 3000);
}

function getstudent() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}