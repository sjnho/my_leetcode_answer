var mySqrt = function(x) {
  if(x === 0){
    return 0
  }
  if(x ===1){
    return 1
  }

  let left = 0 , right = x;
  while(left < right-1){
    const half = Math.floor((left+right)/2)
    if(half*half > x){
      right = half
    }else{
      left = half
    }
  }
  return left
};

console.log('mysqrt',mySqrt(4))
console.log('mysqrt',mySqrt(8))
console.log('mysqrt',mySqrt(1024))
console.log('mysqrt',mySqrt(96))