//https://leetcode-cn.com/problems/3sum/description/
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
// [-1, 0, 1],
// [-1, -1, 2]
// ]

/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let length = nums.length
  let ret = []
  for (let i = 0; i < length - 2; i++) {
    if (nums[i] > 0)
      break;
    if (i > 0 && nums[i - 1] === nums[i])
      continue;
    let j = i + 1, k = length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        ret.push([nums[i], nums[j], nums[k]])
        while(j<k && nums[j] === nums[j+1])j++
        while(j<k && nums[k] === nums[k-1])k--
        j++
        k--
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }
  return ret
};
console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])))