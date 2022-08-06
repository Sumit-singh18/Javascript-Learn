let object ={
    name :'Sumit',
    age : 45,
    city : 'Jammu',
    dataa: function(){
        console.log(`${name} from ${city} and age ${age}`)
    }
}


let object2 ={
name:'sumit'
}                                               


// Never do this just for undeerstanding we are doing this
object2.__proto__= object;



// in console we are doing object2.age it will return the age = 45 it is checking first in its environmnt and then
//   it will cheeck in object because we asign prototype of object2 in the object



Function.prototype.mybind = function()
{
    console.log("HSHSJSJSJSSJ")
}

function Fun(){

}

function fun2(){

}


// after applying the prototypr in mybind method it is accessible to all the function present in global like fun and fun2