/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index =  nums.indexOf(target) ;
    
    // Not Found
    if(index == -1){
        for(let i = 0 ; i < nums.length ; i++ ){
            if(nums[i] > target){
                return i;
            }
        }
        return nums.length;
        
    } else {
        return index;
    }
};