const { map, filter, average, flatten, every } = require('./reduce');

const arr = [1, 2, 3, 4];

test('should multiply each array value by two', () => {
  const multiplyBy2 = num => num * 2;

  expect(map(arr, multiplyBy2)).toStrictEqual([2, 4, 6, 8]);
});

test('should returned filtered array', () => {
  const areEvens = num => num % 2 === 0;

  expect(filter(arr, areEvens)).toStrictEqual([2, 4]);
});

test('should return the average of an array of values', () => {
  expect(average(arr)).toBe(2.5);
});

test('should flatten nested arrays, no matter how nested', () => {
  const nested1 = [1, 2, 3, [4, 5, 6], [7, 8], [[9]]];
  const nested2 = [[1], [[2]], [[3, [4]]], [5, 6, [[[7]]]], 8, [9]];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  expect(flatten(nested1)).toStrictEqual(expected);
  expect(flatten(nested2)).toStrictEqual(expected);
});


test('should return true if all elements in array pass iterator test', () => {
  const areEvens = (num) => num % 2 === 0;
  const allEvens = [2, 4, 6, 8];

  const areNotEvens = (num) => num % 2 !== 0;
  const allNotEvens = [3, 5,];

  expect(every(allEvens, areEvens)).toBe(true)
  expect(every(allNotEvens, areNotEvens)).toBe(true);
});

test('should return false if all elements do not pass iterator test', () => {
  const areEvens = (num) => num % 2 === 0;
  const notAllEvens1 = [2, 4, 6, 8, 1];
  const notAllEvens2 = [1, 4, 6, 8, 10];
  const notAllEvens3 = [2, 4, 5, 8];

  expect(every(notAllEvens1, areEvens)).toBe(false)
  expect(every(notAllEvens2, areEvens)).toBe(false)
  expect(every(notAllEvens3, areEvens)).toBe(false)
});
