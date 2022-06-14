// The copyWithin() method copies array elements to another position in the array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.


const copyWithin = ['Sumit','Snehal','Navneet','Vidhi']
// here(target, replace)  2 is a target element and 3 will target the value of index 2 nd overwrite the target value
copyWithin.copyWithin(2,3)
console.log(copyWithin)