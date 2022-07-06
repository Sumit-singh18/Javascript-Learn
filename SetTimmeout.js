
const SetTime =()=>{

setTimeout (() => {
    var print = 'SetTimmeout Works after 3seconds'
    console.log(print)
}, 3000);
console.log('It will not wait for 3 seconds and run into the next line of code')
}
SetTime()