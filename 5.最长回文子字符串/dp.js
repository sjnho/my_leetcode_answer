/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if(s.length <2){
    return s
  }
  const length = s.length
  const dp = []
  let maxLength = 1;
  let begin = 0;
  for(let i = 0 ;i<length;i++){
      dp[i] = []
      dp[i][i] = true
      if(s[i] === s[i+1]){
        dp[i][i+1] = true
      }
  }
  for(let L = 2 ;L <= length ; L++){
      for(let i = 0 ; i < length;i++){
        let j = i+L-1
        if(j >= length){
          break
        }
        if(s[i] !== s[j]){
          dp[i][j] = false
        }else if(dp[i][j] === undefined){
          if(j-i<3){
            dp[i][j] = true
          }
          else{
            dp[i][j] = dp[i+1][j-1]
          }
        }
        if(dp[i][j] && j-i+1 > maxLength){
          maxLength = j-i+1
          begin = i
        }
      }

  }
  return s.substring(begin,begin+maxLength)
};


console.log('longestPalindrome',longestPalindrome("aaaaa"))

/**
 * P{i,j} = P{i+1,j-1}^S[i] === S[j]
 * P(i,i)=true
   P(i,i+1)=(Si==Si+1)
 */

