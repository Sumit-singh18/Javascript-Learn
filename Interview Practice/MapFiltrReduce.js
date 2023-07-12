const array = [5, 4, 5, 58];
// Map used to transform the value from the given array
const Double = (x) => {
  return x * 2;
};
const result = array.map(Double);
console.log(result);

// Filter is used to filter oout the Value from the Given array

const fillter = [3, 4, 5, 6, 6, 7];
const isEven = (x) => {
  return x % 2 === 0;
};
const filterRes = fillter.filter(isEven);
let uniqarr = [...new Set(filterRes)];
console.log(uniqarr);

// 1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the array to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

// Reduce

const reducearr = [3, 4, 5, 6, 5];

const reducOutput = reducearr.reduce(
  (RedFunc = (accumulator, current) => {
    accumulator = accumulator + current;
    return accumulator;
  }),
  0
);
console.log(reducOutput);
