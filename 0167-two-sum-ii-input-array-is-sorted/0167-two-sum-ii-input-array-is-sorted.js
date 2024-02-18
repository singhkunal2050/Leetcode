/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let results = {};
    
    for(let i = 0 ; i < numbers.length; i++) {
        let offsetIndex = i+1;
        let complement = target - numbers[i];
        if(results.hasOwnProperty(complement)){
            return [results[complement], offsetIndex]
        } else {
            results[numbers[i]] = offsetIndex;
        }
    }
    return [];
};