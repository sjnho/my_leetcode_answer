/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let i = parseInt(Math.sqrt(n))
  if(i*i === n)
    return 1
let minLen = Number.MAX_SAFE_INTEGER

  while(i > Math.sqrt(n/2) -1){
    let len = 1 + numSquares(n - i*i)
    if(minLen > len)
      minLen = len
    i-- 
  }
  return minLen
};
console.log(numSquares(12))