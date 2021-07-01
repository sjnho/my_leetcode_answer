var minimumTotal = function(triangle) {
  const length = triangle.length;
  let dp = Array.from({length},v=>[])
  for(let i = 0;i<length;i++){
    dp[length-1][i] = triangle[length-1][i]
  }
  for(let i = length-2;i>=0;i--){
     for(let j = 0 ;j<i+1;j++){
       dp[i][j] = Math.min(dp[i+1][j],dp[i+1][j+1]) + triangle[i][j]
     } 
  }
  return dp[0][0]
};

console.log('test',minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))