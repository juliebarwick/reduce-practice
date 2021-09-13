const { map, filter } = require('./reduce');

test('should multiply each array value by two', () => {
  const multiplyBy2 = num => num * 2;
  const arr = [1, 2, 3, 4];

  expect(map(arr, multiplyBy2)).toStrictEqual([2, 4, 6, 8]);
});

test('should returned filtered array', () => {
  const areEvens = num => num % 2 === 0;
  const arr = [1, 2, 3, 4];

  expect(filter(arr, areEvens)).toStrictEqual([2, 4]);
})