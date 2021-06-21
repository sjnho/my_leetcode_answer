var getSmallestString = function(n, k) {
  const a = Math.floor((26*n-k)/25)
  const z = Math.floor((k-a)/26)
  let ret = '';
  for(let i =0;i<a;i++){
    ret+='a'
  }
  ret+=k-26*z-a === 0 ?'':String.fromCharCode(k-26*z-a+96)
  for(let i=0;i<z;i++){
    ret+='z'
  }
  return ret
};

// console.log('result',getSmallestString(3,27))

console.log('result',getSmallestString(5,130))