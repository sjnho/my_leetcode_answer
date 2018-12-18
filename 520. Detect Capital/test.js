/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length > 1) {
    if (word[0].toUpperCase() === word[0]) {
      let flag = true
      //验证全小写
      for (let i = 1; i < word.length; i++) {
        if (word[i].toUpperCase() === word[i]) {
          flag = false
          break;
        }
      }
      if (!flag) {
        flag = true
        //验证全大写
        for (let i = 1; i < word.length; i++) {
          if (word[i].toLowerCase() === word[i]) {
            flag = false
            break;
          }
        }
      }
      return flag
    } else {
      for (let i = 1; i < word.length; i++) {
        if (word[i].toUpperCase() === word[i]) {
          return false
        }
      }
      return true
    }
  } else {
    return true
  }
};
//执行用时: 72 ms, 在Detect Capital的JavaScript提交中击败了99.41% 的用户