/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  const length = nums.length;
  if(length ===0){
    return 0
  }
  let ans = nums[0] 
  const dp = [[nums[0],nums[0]]]
  for(let i = 1 ; i< length;i++){
    dp[i] = []
    dp[i][0] = Math.max(dp[i-1][0]*nums[i],nums[i],dp[i-1][1]*nums[i])
    dp[i][1] = Math.min(dp[i-1][1]*nums[i],nums[i],dp[i-1][0]*nums[i])
    ans = Math.max(dp[i][0],ans)
  }
  return ans
};

console.log('a',maxProduct([2,3,-2,4]))
console.log('b',maxProduct([-2,0,-1]))
console.log('c',maxProduct([0,2]))
console.log('d',maxProduct([-2,-3,-4,5]))