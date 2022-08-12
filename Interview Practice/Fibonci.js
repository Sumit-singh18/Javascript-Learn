const fib=(n)=>{
    const fibarray = [ 0,1]
    for( i=2;i<n;i++){
        fibarray.push(fibarray[i-2]+fibarray[i-1])
    }
    return fibarray;
}
console.log(fib(20))