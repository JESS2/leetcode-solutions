/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};

let result = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(result);