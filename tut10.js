console.log("Hey this is a date and time in javascript session");
let today = new Date();
// console.log(today);

otherdate = new Date('5-15-2000 12:54:41');
// otherdate = new Date('May 18 2000')
console.log(otherdate);
let a;
a = otherdate.getMonth();
a = otherdate.getDay();
a = otherdate.getYear();
a = otherdate.getSeconds();
a = otherdate.getMinutes();
console.log(a);

otherdate.setDate('23');
otherdate.setSeconds('45');
otherdate.setMinutes('26');
otherdate.setFullYear('2001')
otherdate.setHours('9');
otherdate.setMonth('6')
console.log(otherdate);