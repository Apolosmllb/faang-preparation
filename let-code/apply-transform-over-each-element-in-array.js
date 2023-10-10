//node --watch apply-transform-over-each-element-in-array.ts

/*const map = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  return arr.map((e, index) => fn(e, index));
};*/


var moveZeroes = function (nums) {
  const zeros = nums.filter(i => i === 0)
  return nums.filter(i => i !== 0)
};


console.log(moveZeroes([0,1,0,3,12]))
