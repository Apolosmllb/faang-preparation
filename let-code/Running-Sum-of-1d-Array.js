/**
 * Running-Sum-of-1d-Array.js
 * */


//0(n) TC 
//0(1) EC
const runningSum = (nums) => {
  let results = [];
  results[0] = nums[0];
  for (let i = 1; i < nums.length; i++) results[i] = nums[i] + results[i - 1];
  return results;
};

//0(n) TC 
//0(1) EC

const runningSum2 = (nums) => {
  for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];
  return nums;
};

const a = [1, 2, 3, 4];
const b = [1, 2, 3, 4];

runningSum2(a);
runningSum(b);
