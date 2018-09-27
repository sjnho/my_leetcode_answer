/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString()
  let reverse = x.split("").reverse().join("")
  return reverse === x
};