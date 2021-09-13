//Challenge 1: rewrite map with reduce
const map = (arr, fn) => arr.reduce((acc, x) => [...acc, fn(x)], []);

console.log(map([1, 2, 3, 4], num => num * 2));
