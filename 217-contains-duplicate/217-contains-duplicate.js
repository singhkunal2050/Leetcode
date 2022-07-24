/**
 * @param {number[]} nums
 * @return {boolean}
 */

// technique => for every element i => start from i and go to n and check if the number is repeated
var containsDuplicate = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
           for(let j = i+1 ; j<nums.length ; j++){
               if(nums[i]==nums[j]){
                   return true
               }
           }
    }
    return false;
};