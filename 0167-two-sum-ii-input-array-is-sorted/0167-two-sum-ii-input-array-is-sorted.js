/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Hashmap Technique
// var twoSum = function(numbers, target) {
//   let results = {};
    
//     for(let i = 0 ; i < numbers.length; i++) {
//         let offsetIndex = i+1;
//         let complement = target - numbers[i];
//         if(results.hasOwnProperty(complement)){
//             return [results[complement], offsetIndex]
//         } else {
//             results[numbers[i]] = offsetIndex;
//         }
//     }
//     return [];
// };

// [2,7,11,15]
// Since the array is sorted we can use 2 pointer here
var twoSum = function(numbers, target) {
    let [l,r] = [0, numbers.length - 1];
    
    while(l < r) {
        if(numbers[l] + numbers[r] === target){
            return [l+1, r+1];
        } else if(numbers[l] + numbers[r] > target) {
            r--;
        } else if(numbers[l] + numbers[r] < target) {
            l++;
        }    
    }
    
    return [];
    
};