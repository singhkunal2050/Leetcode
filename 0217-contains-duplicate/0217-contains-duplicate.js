/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let results = {};

    for(let i = 0; i < nums.length ; i++) {
        if(results[nums[i]]){
          return true
        } else {
          results[nums[i]] = 1;
        }
    }
    return false;

};