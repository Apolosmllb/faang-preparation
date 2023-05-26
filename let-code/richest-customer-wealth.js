//richest-customer-wealth.js

const maximumWealth = (accounts) => {
  let sum = 0;
  let array = []
  accounts.forEach((element) => {
   
    element.map((e) => {
      sum += e;
      return sum;
    });
    array.push(sum)
    sum = 0
  });

  return  Math.max(...array)
};

accounts = [
  [1, 2, 3],
  [6, 2, 1],
];

const a = accounts[0];

console.log(maximumWealth(accounts))
