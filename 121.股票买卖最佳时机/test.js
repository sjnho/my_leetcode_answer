/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   let ans=0,min=Number.MAX_SAFE_INTEGER
    for(let price of prices){
      min = Math.min(min,price)
      ans = Math.max(price-min,ans)
    }
    return ans 
};

console.log('1',maxProfit([7,1,5,3,6,4]))
console.log('2',maxProfit([7,6,4,3,1]))