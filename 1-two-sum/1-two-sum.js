/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// target - current should be available in the prevMap (if yes get both the index :) 
var twoSum = function(nums, target) {
    let prevMap = {}
    for(let i = 0 ; i<nums.length ; i++){
        let diff = target-nums[i];
        if(prevMap.hasOwnProperty(diff))
            return [ prevMap[diff] , i]
        else
            prevMap[nums[i]] = i
    }
    return [];
};