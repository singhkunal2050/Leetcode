/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length -1;
    
    while(left<right){
        while(!isAlphaNumeric(s[left]) && left < right) left++;
        while(!isAlphaNumeric(s[right]) && left < right) right--;
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
    
};


const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || 
           (code >= 97 && code <= 122) || 
           (code >= 65 && code <= 90); // Allow uppercase letters as well
};