let num = [5,8,9,6,9,81]
// assigning a value using array destructring 
let [a,s,d,f,g,h] = num;
console.log(d)


// swapping a value using desttructing
let q =3;
let w = 4;
// swaaping in next line using destructring
[q,w]= [w,q]
console.log(q)



let names = 'my Name is Sumit singh.'.split();
console.log(names)
let [z,x , ...c]= names;
console.log(c)


