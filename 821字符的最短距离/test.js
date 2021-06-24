var shortestToChar = function(s, c) {
  const array = Array.from(s)
  const indexList = [];
  array.forEach((v,i)=>{
    if(v === c){
      indexList.push(i)
    }
  })
  return array.map((v,i)=>{
    return Math.min(...indexList.map(e=>Math.abs(i-e)))
  })

};
console.log('aaa',shortestToChar('loveleetcode','e'))
console.log('aaa',shortestToChar('aaab','b'))
