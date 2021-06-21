/**
 * @param {string} s
 * @return {boolean}
 */
 var checkValidString = function(s) {
  if(!s){
    return false
  }
  const leftStack = []
  const starStack = []
  for(let i =0;i<s.length;i++){
    if(s[i] === '('){
      leftStack.push(i)
    }else if(s[i] === '*'){
      starStack.push(i)
    }else{
      if(leftStack.length > 0){
        leftStack.pop()
      }else if(starStack.length > 0){
        starStack.pop()
      } else {
        return false
      }
    }
  }
  if(leftStack.length > starStack.length){
    return false
  } else{
    while(leftStack.length){
      const leftTop = leftStack.pop()
      const starTop = starStack.pop()
      if(leftTop > starTop){
        return false
      }
    }
  }
  return true
};

console.log(checkValidString("(*))"))