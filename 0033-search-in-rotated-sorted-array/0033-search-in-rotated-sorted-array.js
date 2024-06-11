/* Divide and conquer, simply check range if the target is in the left chunk then move the right to mid otherwise depending on whether nums[left] is bigger or smaller move the left or right pointer by one, 
At any iteration, if we find the nums[mid] | nums[left] | nums[right] equals target we return that index, if the while loop ended and we did not return anything we will return -1; 

Note: Whenever left,right changes, recalculate mid at every iteration
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    debugger;
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
    
  while(left <= right) {
    if(nums[mid] == target) return mid;
    if(nums[left] == target) return left;
    if(nums[right] == target) return right;

      
    if(isLeftChunkInRange(nums, mid,left, target)){
        right = mid;
    } else if(nums[left] > target){
        left ++
    } else {
        right--
    }
    mid =  Math.floor((left + right) / 2);
  }
   return -1;
    
};

    
const isLeftChunkInRange = (nums, mid,left, target) => {
    return nums[mid] > target && nums[left] < target; 
}