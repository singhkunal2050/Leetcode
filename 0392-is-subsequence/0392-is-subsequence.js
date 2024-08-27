/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(smallString, longString) {
    // Iterate over the long string and if the longstring[lp] == shortstring[sp]
        // Increment smallString Pointer
        // Anyways increement longstring pointer 
    // In the end if smallStringPointer === smallString.length, we have a subsequence 
    
    let smallStringPointer,longStringPointer
    for(smallStringPointer = 0, longStringPointer= 0 ; longStringPointer< longString.length ; ) {
        if(longString[longStringPointer] === smallString[smallStringPointer]){
            smallStringPointer++;
        }
        longStringPointer++;
    }
    return smallString.length === smallStringPointer
    
};