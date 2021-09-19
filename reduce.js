//Challenge 1: rewrite map with reduce
const map = (arr, fn) => arr.reduce((acc, x) => [...acc, fn(x)], []);

//Challenge 2: rewrite map with reduce
const filter = (arr, fn) => arr.reduce((acc, x) => fn(x) ? [...acc, x] : [...acc], []);

// Challenge 3: write a function that returns the average of an array of values using reduce
const average = (arr) => arr.reduce((acc, x) => acc + x) / arr.length;

// Challenge 4: flatten a nested array
const flatten = (nestedArr, initial = []) => nestedArr.reduce((acc, x) => Array.isArray(x) ? flatten(x, acc) : [...acc, x], initial);

// Challenge 5: write every with reduce
const every = (arr, fn) => arr.reduce((acc, x) => acc && !!fn(x), true);

// Challenge 6: write some with reduce
const some = (arr, fn) => arr.reduce((acc, x) => acc || !!fn(x), false);

// Challenge 7: use reduce to return an object with the counts of elements in the array
const count = (arr) => arr.reduce((acc, x) => ({...acc, [x]: acc[x] ? acc[x] + 1 : 1}), {});

// Challenge 8: use reduce to return the counts of a property within an object with nested arrays
const countNested = (obj, propToCount, nestedProp) => obj[nestedProp].reduce((acc, x) => acc + (Array.isArray(x[nestedProp]) ? countNested(x, propToCount, nestedProp) : x[propToCount]), obj[propToCount]);

// Challenge 9: combine filter and map methods
const filterAndMap = (arr, filterFn, mapFn) => arr.reduce((acc, x) => filterFn(x) ? [...acc, mapFn(x)] : [...acc], []);

module.exports = {
  map,
  filter,
  average,
  flatten,
  every,
  some,
  count,
  countNested,
  filterAndMap,
};
