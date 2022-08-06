const callback={
    name:'Sumit',
    Student:'IT',
    Define:function(Grade){
        let Text=`My Name is ${this.name} I am a Student of B.tech(${this.Student}). My previous Year Grade is ${Grade}`
        // document.getElementById('Define').innerHTML=Text
        // console.log(Text)
    }
    }


const Callback2={
    name:'Vidhi',
    Student:'CSE'
}

callback.Define.call(Callback2,['P'])
// Appply method takes argument as an array


let arr;
// apply Method is Also used to find max number in array
arr = Math.max.apply(null,[1,2,3,3,5,8,7,77,9,8,9,8,9,75]);
console.log(arr)

//  let max = Math.max(8,88)
// console.log(max)