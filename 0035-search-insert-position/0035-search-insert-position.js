/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const index =  nums.indexOf(target) ;
    
    console.log({index});
    // Not Found
    if(index == -1){
        console.log('not found');
        for(let i = 0 ; i < nums.length ; i++ ){
            if(nums[i] > target){
                return i;
            }
        }
        console.log('no eleme greater than target')
        return nums.length;
        
    } else {
        return index;
    }
};