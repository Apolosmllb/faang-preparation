// node --watch fizz-buzz.js

var fizzBuzz = function (n) {
  array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) array.push("FizzBuzz");
    else if (i % 3 === 0) array.push("Fizz");
    else if (i % 5 === 0) array.push("Buzz");
    else array.push(i.toString());
  }
  return array;
};

n = 15;
console.log(fizzBuzz(n));
