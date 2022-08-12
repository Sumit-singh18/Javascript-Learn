let myvalue = 121;
// let myvalue = 121;

const CheckValue=()=>{
    //  let uppervalue= myvalue.toUpperCase();
    let RevVal = myvalue.toString().split('').reverse().join('')
    let StringVal = myvalue.toString();
    if(RevVal==StringVal){
        console.log('its a palandrome')
    }
    else{
        console.log('Not Palandrome')
    }
}
CheckValue()