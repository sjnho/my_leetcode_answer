/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 网上提供的，窗口，因为时间要求，2个for循环不行。这种实现是i是窗口的right,
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0
    let ret = 0,pro = 1,left = 0
    for(let i =0 ; i < nums.length; i++){
        pro*=nums[i]
        while(pro >= k) pro/=nums[left++]
        ret += i-left+1
    }
    return ret
};
console.log(numSubarrayProductLessThanK([10,5,2,6],100));
