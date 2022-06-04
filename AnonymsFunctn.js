//  we can use anonyms function without giving name to the function
document.addEventListener('click', function(){
console.log('button clicked')
})   


// we can also store the function in variable

const sum = function(a,b){
    result = a+b;
    console.log(result)

}
sum(5,78)