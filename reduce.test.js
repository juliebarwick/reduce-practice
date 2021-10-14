const { map,
  filter,
  filterAndMap,
  average,
  flatten,
  every,
  some,
  count,
  countProp,
  countNested,
  countCb,
  fizzBuzz,
  arrToObj
} = require('./reduce');

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

  expect(every(allEvens, areEvens)).toBe(true);
  expect(every(allNotEvens, areNotEvens)).toBe(true);
});

test('should return false if all elements do not pass iterator test', () => {
  const areEvens = (num) => num % 2 === 0;
  const notAllEvens1 = [2, 4, 6, 8, 1];
  const notAllEvens2 = [1, 4, 6, 8, 10];
  const notAllEvens3 = [2, 4, 5, 8];

  expect(every(notAllEvens1, areEvens)).toBe(false);
  expect(every(notAllEvens2, areEvens)).toBe(false);
  expect(every(notAllEvens3, areEvens)).toBe(false);
});

test('should return true if some elements pass iterator test', () => {
  const areEvens = (num) => num % 2 === 0;
  const someEvens1 = [2, 4, 5, 6];
  const someEvens2 = [2, 3];
  const someEvens3 = [1, 2];
  const allEvens = [2, 4, 6];

  expect(some(someEvens1, areEvens)).toBe(true);
  expect(some(someEvens2, areEvens)).toBe(true);
  expect(some(someEvens3, areEvens)).toBe(true);
  expect(some(allEvens, areEvens)).toBe(true);
});

test('should return false if no elements pass iterator test or if empty array', () => {
  const areEvens = (num) => num % 2 === 0;
  const noEvens = [3, 5, 7, 9];

  expect(some([], areEvens)).toBe(false);
  expect(some(noEvens, areEvens)).toBe(false);
});

test('should count the elements in an array and return an object with those counts', () => {
  const nums = [1, 2, 3, 3, 4, 4, 4, 3];
  const words = ['car', 'car', 'CAR', 'bat', 'batty', ''];

  expect(count(nums)).toStrictEqual({ 1: 1, 2: 1, 3: 3, 4: 3 });
  expect(count(words)).toStrictEqual({car: 2, CAR: 1, bat: 1, batty: 1, '': 1});
});

test('should count the desired property within in an nested array within an object', () => {
  const team = {
    name: 'person1',
    sales: 15,
    manages: [
      {
        name: 'person2',
        sales: 16,
        manages: [
          {
            name: 'person4',
            sales: 9,
            manages: [
              {
                name: 'person5',
                sales: 5,
                manages: [
                ]
              },
              {
                name: 'person6',
                sales: 2,
                manages: [
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'person3',
        sales: 14,
        manages: []
      }
    ]
  };

  expect(countNested(team, 'sales', 'manages')).toBe(61);
});

test('should apply a filter and map function', () => {
  const wizards = [
    {
      name: 'Harry Potter',
      house: 'Gryfindor'
    },
    {
      name: 'Cedric Diggory',
      house: 'Hufflepuff'
    },
    {
      name: 'Tonks',
      house: 'Hufflepuff'
    },
    {
      name: 'Ronald Weasley',
      house: 'Gryfindor'
    },
    {
      name: 'Hermione Granger',
      house: 'Gryfindor'
    }
  ];

  const filterHuffle = (obj) => obj.house === 'Hufflepuff';
  const mapName = (obj) => obj.name;

  expect(filterAndMap(wizards, filterHuffle, mapName)).toStrictEqual(['Cedric Diggory', 'Tonks']);

});

test('should return an object with the counts of the results of callback', () => {
  const cb = (num) => num % 3;

  expect(countCb(arr, cb)).toStrictEqual({0: 1, 1: 2, 2: 1});
});

test('should count the properties in an object that match a given value', () => {
  const wizards = [
    {
      name: 'Harry Potter',
      house: 'Gryfindor'
    },
    {
      name: 'Cedric Diggory',
      house: 'Hufflepuff'
    },
    {
      name: 'Tonks',
      house: 'Hufflepuff'
    },
    {
      name: 'Ronald Weasley',
      house: 'Gryfindor'
    },
    {
      name: 'Hermione Granger',
      house: 'Gryfindor'
    }
  ];

  expect(countProp(wizards, 'house', 'Gryfindor')).toBe(3);
});

test('should return correct FizzBuzz string', () => {
  const nums = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14, 15
  ];

  const expectedFizzBuzz = '1\n2\nBuzz\n4\nFizz\nBuzz\n7\n8\nBuzz\nFizz\n11\nBuzz\n13\n14\nFizzBuzz\n';

  expect(fizzBuzz(nums)).toBe(expectedFizzBuzz);
});

test('should return a nested object', () => {
  const wizards = [
    {
      name: 'Harry Potter',
      house: 'Gryfindor'
    },
    {
      name: 'Cedric Diggory',
      house: 'Hufflepuff'
    },
    {
      name: 'Tonks',
      house: 'Hufflepuff'
    }
  ];
  const expectedWizardObj = {
    'Harry Potter': {
      name: 'Harry Potter',
      house: 'Gryfindor'
    },
    'Cedric Diggory': {
      name: 'Cedric Diggory',
      house: 'Hufflepuff'
    },
    'Tonks': {
      name: 'Tonks',
      house: 'Hufflepuff'
    }
  }
  expect(arrToObj(wizards, 'name')).toStrictEqual(expectedWizardObj)

})
