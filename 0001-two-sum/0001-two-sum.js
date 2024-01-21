/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Iterate over array and check if k-num[i] is in the hashMap, if yes return [hashMap[k-nums[i]] , i] else store current index in the hashMap
var twoSum = function(nums, target) {

    let hashMap = {};
    for (let i = 0 ; i < nums.length ; i++) {
        const complement = target - nums[i];
        if(hashMap.hasOwnProperty(complement)){
            return [hashMap[complement], i];
        } else {
            hashMap[nums[i]] = i;
        }   
    }
    return [];
};
