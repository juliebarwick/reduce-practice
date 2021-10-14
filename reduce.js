//Challenge 1: rewrite map with reduce
const map = (arr, fn) => arr.reduce((acc, x) => [...acc, fn(x)], []);

//Challenge 2: rewrite map with reduce
const filter = (arr, fn) => arr.reduce((acc, x) => fn(x) ? [...acc, x] : [...acc], []);

// Challenge 3: combine filter and map methods
const filterAndMap = (arr, filterFn, mapFn) => arr.reduce((acc, x) => filterFn(x) ? [...acc, mapFn(x)] : [...acc], []);

// Challenge 4: write a function that returns the average of an array of values using reduce
const average = (arr) => arr.reduce((acc, x) => acc + x) / arr.length;

// Challenge 5: flatten a nested array
const flatten = (nestedArr, initial = []) => nestedArr.reduce((acc, x) => Array.isArray(x) ? flatten(x, acc) : [...acc, x], initial);

// Challenge 6: write every with reduce
const every = (arr, fn) => arr.reduce((acc, x) => acc && !!fn(x), true);

// Challenge 7: write some with reduce
const some = (arr, fn) => arr.reduce((acc, x) => acc || !!fn(x), false);

// Challenge 8: use reduce to return an object with the counts of elements in the array
const count = (arr) => arr.reduce((acc, x) => ({...acc, [x]: acc[x] ? acc[x] + 1 : 1}), {});

// Challenge 9: return the count that have given property
const countProp = (arr, key, val) => arr.reduce((acc, x) => acc + (x[key] === val), 0);

// Challenge 10: use reduce to return the counts of a property within an object with nested arrays
const countNested = (obj, propToCount, nestedProp) => obj[nestedProp].reduce((acc, x) => acc + (Array.isArray(x[nestedProp]) ? countNested(x, propToCount, nestedProp) : x[propToCount]), obj[propToCount]);

// Challenge 11: return an object with the counts of the results of a callback function mapped to each array value
const countCb = (arr, cb) => arr.reduce((acc, x) => ((y) => ({...acc, [y]: acc[y] ? acc[y] + 1 : 1}))(cb(x)), {});

// Challenge 12: write `FizzBuzz` with reduce (input is an array of numbers)
const fizzBuzz = (arr) => arr.reduce((acc, x) => {
  if (x % 5 !== 0 && x % 3 !== 0) {
    acc += x;
  }
  if (x % 5 === 0) {
    acc += 'Fizz';
  }
  if (x % 3 === 0) {
    acc += 'Buzz';
  }
  return acc + '\n';
}, '');

// Challenge 13: Convert an array of objects to one nested object, with the given input key as the key for each object
const arrToObj = (arr, key) => arr.reduce((acc, x) => ({...acc, [x[key]]: x}), {})

module.exports = {
  map,
  filter,
  filterAndMap,
  average,
  flatten,
  every,
  some,
  count,
  countProp,
  countCb,
  countNested,
  fizzBuzz,
  arrToObj,
};
