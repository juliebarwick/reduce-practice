const { map, filter, average } = require('./reduce');

test('should multiply each array value by two', () => {
  const multiplyBy2 = num => num * 2;

  expect(map(arr, multiplyBy2)).toStrictEqual([2, 4, 6, 8]);
});

test('should returned filtered array', () => {
  const areEvens = num => num % 2 === 0;
  const arr = [1, 2, 3, 4];

  expect(filter(arr, areEvens)).toStrictEqual([2, 4]);
});

test('should return the average of an array of values', () => {
  const arr = [1, 2, 3, 4];

  expect(average(arr)).toBe(2.5);
});

