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