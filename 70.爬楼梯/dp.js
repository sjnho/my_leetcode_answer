var climbStairs = function(n){
  const dp = []
  dp[0] = dp[1] = 1
  for(let i = 2; i<= n ;i++){
    dp[i] = dp[i-2]+dp[i-1]
  }
  return dp[n]
}

console.log('45',climbStairs(45))