const callback={
name:'Sumit',
Student:'IT',
Define:function(Grade){
    let Text=`My Name is ${this.name} I am a Student of B.tech(${this.Student}). My previous Year Grade is ${Grade}`
    document.getElementById('Define').innerHTML=Text
    // console.log(Text)
}
}
callback.Define('O')
// console.log(callback)

const Callback2={
    name:'Vidhi',
    Student:'CSE'
}
//call function is used when you want to call a fucntion/object of the another object .I.E=>  we used callback function in callback2 by using call mthod
callback.Define.call(Callback2,'S')


