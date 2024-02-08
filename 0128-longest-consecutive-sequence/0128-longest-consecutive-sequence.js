/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longestSequence = 0;
    let numsSet = new Set(nums);
    
    for(const num of [...numsSet]) {
        let prevNumber = num - 1;
        if(numsSet.has(prevNumber)) continue;
        
        let currentNumber = num;
        let len = 0;
        const hasNextNumber = () => numsSet.has(currentNumber)
        
        while(hasNextNumber()) {
            currentNumber++;
            len++;
        }
        longestSequence = Math.max(len,longestSequence);
    }
    
    return longestSequence
    
};