//Challenge 1: rewrite map with reduce
const map = (arr, fn) => arr.reduce((acc, x) => [...acc, fn(x)], []);

//Challenge 2: rewrite map with reduce
const filter = (arr, fn) => arr.reduce((acc, x) => fn(x) ? [...acc, x] : [...acc], []);

// Challenge 3: write a function that returns the average of an array of values using reduce
const average = (arr) => arr.reduce((acc, x) => acc + x) / arr.length;

module.exports = {
  map,
  filter,
  average
};
