/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// target - current should be available in the array (if yes get both the index and push them avoid multiple entries and we are done :) 
var twoSum = function(nums, target) {
    let myMap = {}
    for(let i = 0 ; i<nums.length ; i++){
        let diff = target-nums[i];
        if(myMap.hasOwnProperty(diff))
            return [ myMap[diff] , i]
        else
            myMap[nums[i]] = i
    }
    return [];
};