/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
 if(n === 1){
    return 1
  }
  const numberOfTwo = Math.floor(n/2)
  let total = 1;
  for(let i= 1 ;i <= numberOfTwo;i++){
      total+= combination(n-i,i)
  }
  return total
};  
/**
 * 得到C(3,2)
 */
const combination = function (n,m){
  return factorial(n)/factorial(m)/factorial(n-m)
}

const factorial = function(n){
  if([0,1].includes(n)){
    return 1
  }
  return factorial(n-1) * n
}


console.log('5',climbStairs(5))
console.log('4',climbStairs(4))
console.log('6',climbStairs(6))