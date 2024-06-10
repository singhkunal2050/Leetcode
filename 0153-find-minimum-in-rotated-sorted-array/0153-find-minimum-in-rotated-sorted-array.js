/* 
    This is a rotated sorted array, Anytime sorted arrays are there and we wanna search,
    we can use Binary Search, Basically find mid, and take decisions to search,
    Here we decide based on whether left chunk is in ascending order, we know that the right chunk will have lesser values [3,4,5,|1,2] Here we know if 345 are sorted, we can not find smaller values than 5 itself. Hence we move right for next iteration


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    debugger;
    let left = 0;
    let right = nums.length - 1;
    let min = Infinity;
    
    while(left <= right){
        
        if(nums[left] < nums[right]){
            min = Math.min(nums[left], min);
            break;
        }
        
        let mid = Math.floor((left + right) / 2);
        min = Math.min(nums[left], min);
        
        if(isLeftChunkSorted(nums,mid)){
            left = mid + 1;
        } else if(nums[mid]>= nums[left]){
            left++;
        } else {
            right--;

        }
        
        
    }
    return min;
    
};

const isLeftChunkSorted = (nums, mid) => {
    return nums[mid] > nums[0];
}