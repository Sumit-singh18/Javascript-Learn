//  a function is called as first class function when function in that language is treated like another variable

let Name=()=>{
    return 'hi'
}

let message=(greet,value)=>{
    console.log(greet(),value)
    
}
message(Name,'Sumittt')