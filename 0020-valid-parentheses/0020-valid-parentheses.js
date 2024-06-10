/* We simple iterate throught the charMap, we create separate arrays for keys and values,
   Now whever we found keys which are opening brackets we push in the stack
   Whenever we found values that is Closing brackets and we found the last stack element to
   be the corresponding opening bracket we pop
   This way in the end the array is empty if its a valid string
   If not empty we know that the string is inaccurate
*/



let charMaps = {
    "(": ")",
    "[": "]",
    "{": "}"
}

// "([}}])"

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 != 0)
        return false;
    
    
    let stack = [];
    let keys = Object.keys(charMaps);
    let values = Object.values(charMaps);
    
    for(let i = 0 ; i < s.length ; i++ ) {
        if(keys.includes(s[i])){
            stack.push(s[i]);
        } else if(values.includes(s[i]) && charMaps[stack[stack.length-1]] === s[i] ) {
            stack.pop();
        } else {
            return false;
        }
        
    }
    
    return stack.length === 0;
    
    
    
};
