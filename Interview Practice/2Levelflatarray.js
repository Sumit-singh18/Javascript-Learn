// Q-: how to flat a 2 level deep array

// This is 2 level deep array
const arrray = [1,2,3,[4,5,6,[7,8,9]]];

// 1st method to flat a 2 level deep array
console.log(arrray.flat().flat())

//2nd method to flat a 2 level deep array(use this method always)
console.log(arrray.flat(2))
