/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// sort each word in alphabetical order and check for equality o
var groupAnagrams = function(strs) {
    const sortedStrs = strs.map(str => str.split('').sort().join(''));
    const result = [];
    
    for (let i = 0; i < strs.length; i++) {
        // Check if the current word is already included in a group
        let isIncluded = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j].includes(strs[i])) {
                isIncluded = true;
                break;
            }
        }

        if (!isIncluded) {
            const group = [strs[i]];
            for (let j = i + 1; j < strs.length; j++) {
                if (sortedStrs[i] === sortedStrs[j]) {
                    group.push(strs[j]);
                }
            }
            result.push(group);
        }
    }
    return result;
};