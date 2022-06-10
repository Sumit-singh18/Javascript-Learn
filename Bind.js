// by bind method we can bind the object to the common function
const callback = {
    name: 'Sumit',
    Student: 'IT',
   
}
Define = function (Grade) {
    let Text = `My Name is ${this.name} I am a Student of B.tech(${this.roll}). My grade is ${Grade}.`
    document.getElementById('Define').innerHTML = Text
    // console.log(Text)
}


const Bindd = {
    name: 'snehal',
    roll: 1955,
}
const Bindd2 = {
    name: 'snehalll',
    roll: 19525,
}
const Bindd3 = {
    name: 'snehakkkl',
    roll: 19355,
}

// This is call back method . it invoked instantly
Define.call(Bindd,'O')


// this is apply method . In apply method We passs argument in array form [].
Define.apply(Bindd2,['S'])



// this is bind Method. it is use to copy a function.bind can be invoked later
let Copy = Define.bind(Bindd3,'R')
Copy()
