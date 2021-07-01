/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let max = 0;
  for(let i = 0 ;i < s.length;i++){
    let maxI = 1;
    let maxSet = new Set()
    maxSet.add(s[i])
    for(let j = i+1; j < s.length;j++){
        if(maxSet.has(s[j])){
          break;
        }else{
          maxSet.add(s[j])
          maxI++ ;
        }
    }
    max = Math.max(max,maxI)
  }

  return max
};
/**
 * O(n^2) 而且还不断创建set内存使用较大。
 */