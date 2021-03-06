/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  let sum = 0;

  for (let i = 0; i < nums.length; i+=2) {
    sum += nums[i];
  }

  return sum;
};

console.log(arrayPairSum([1,1]));