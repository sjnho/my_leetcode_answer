/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let right = - 1;
  const occur = new Set()
  const length = s.length
  let ans = 0;
  for(let i = 0 ; i < length;i++){
    if(i !== 0 ){
      occur.delete(s[i-1])
    }
    while(right+1 < length && !occur.has(s[right+1])){
        occur.add(s[right+1])
        right++
    }
    ans = Math.max(ans,right-i+1)
  }
  return 
};
//