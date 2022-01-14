'use strict';

const createAdder = function (value) {
  return function (x) {
    return x + value;
  };
};

const add7 = createAdder(7);
const add5 = createAdder(5);
const add3 = createAdder(3);



const iterate = function (numbers, fn) {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    fn(number);
  }
};

iterate([ 2, 3, 5, 7, 11 ], prime => {
  console.log(prime);
});

[ 2, 4, 6, 8, 10 ].forEach(even => {
  console.log(even);
});
