var minimumTotal = function(triangle) {
  const length = triangle.length;
  let dp = Array.from({length},v=>[])
  console.log('dp',dp)
  dp[0][0] = triangle[0][0]
  dp[1][0] = dp[0][0]+triangle[1][0]
  dp[1][1] = dp[0][0]+triangle[1][1]
  for(let i = 2;i<length;i++){
    for(let j = 0 ;j<i+1 ;j++){
      if(j === 0){
        dp[i][j] = dp[i-1][j] + triangle[i][j]
      }else if(j === i){
        dp[i][j] = dp[i-1][j-1] + triangle[i][j]
      }
      else{
        dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j]
      }
    }
  }
  const last = dp[dp.length - 1]
  return Math.min(...last)
};

console.log('test',minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))