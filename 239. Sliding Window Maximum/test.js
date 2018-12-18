var maxSlidingWindow = function(nums, k) {
  let window =[],res = [] 
  for(let i = 0 ;i < nums.length ; i++){
     const num = nums[i]
     if(i>=k && window[0] <= i-k){
       window.shift()
     }
     while(window.length > 0 && nums[window.length-1] <= num){
       window.pop()
     }
     window.push(i)
     if(i >= k-1){
       res.push(nums[window[0]])
     }
  }
  return res
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))