let myvalue = 'mAdam';
// let myvalue = 121;

const CheckValue=()=>{
     let uppervalue= myvalue.toUpperCase();
    let RevVal = uppervalue.toString().split('').reverse().join('')
    let StringVal = uppervalue.toString();
    if(RevVal==StringVal){
        console.log('its a palandrome')
    }
    else{
        console.log('Not Palandrome')
    }
}
CheckValue()