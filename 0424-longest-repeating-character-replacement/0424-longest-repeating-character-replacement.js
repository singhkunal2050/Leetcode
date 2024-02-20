/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let charMap = {};
    let l = 0;
    let r = 0;
    
    for(r = 0 ; r < s.length; r++) {
        if(charMap.hasOwnProperty(s[r])) {
            charMap[s[r]] += 1;
        } else {
            charMap[s[r]] = 1;
        }
        
        let currentWindow = r - l + 1;
        // length of string window - highestCharCount <= k    
        let canReplace = currentWindow - getHighestCharCount(charMap) <= k
        if(canReplace) continue
        else {
            charMap[s[l]] -= 1;
            l++;
        }
        
    }
    
    return r - l;
    
};

const getHighestCharCount = (charMap) => {
    let highest = 0;
    for(item in charMap){
        highest = Math.max(highest, charMap[item])
    }
    return highest;
}