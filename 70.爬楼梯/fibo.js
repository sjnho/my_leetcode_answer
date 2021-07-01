var climbStairs = function(n){
  const result = [1,1,2]
  if(n<=2){
    return result[n]
  }
  return climbStairs(n-1) + climbStairs(n-2)
}

//递归性能太差导致时间超出test b