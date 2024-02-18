/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const results = [];
    nums = nums.sort((a,b) => a-b);
    
    for(let i = 0 ; i< nums.length ; i++) {
        let currentNumber = nums[i];
        
        if(i > 0 && nums[i] === nums[i-1]) continue;
        
        let [l, r] = [i+1, nums.length - 1];
            
        while(l < r) {
            const threeSum = currentNumber + nums[l] + nums[r]
            if(threeSum === 0) {
                results.push([currentNumber, nums[l], nums[r]]);
                l++;
                r--;
                // Skip Dups 
                while(l < r && nums[l] === nums[l-1]) l++;

            } else if(threeSum > 0) {
                r--;
            } else if(threeSum < 0) {
                l++
            }
            
        }
        
        
    }
    
    return results;
}