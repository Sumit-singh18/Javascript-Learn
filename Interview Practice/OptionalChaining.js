/*  The optional chaining (?.) operator accesses an object's property or calls a function. 
 If the object accessed or function called using this operator is undefined or null, 
 the expression short circuits and evaluates to undefined instead of throwing an error.*/

const user = {
  uname: "Sumit",
  contact: 9988,
  Address: {
    HouseNum: 1437,
    city: "IND",
    street: "23 IJk",
    zip: 12121,
  },
};

console.log(user?.Address)