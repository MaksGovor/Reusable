'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const res = [];
  for (let i = 0; i < 10; i++) {
    res.push(average(square(i), cube(i)));
  }
  return res;
};

module.exports = { square, cube, average, calculate };
