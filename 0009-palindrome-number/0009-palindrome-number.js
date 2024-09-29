/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = String(x);
    for(let i = 0, j = number.length - 1; i <= j ; i++,j--){
        console.log({I: number[i], J: number[j]})
        if(number[i] != number[j]){
            return false
        }
    }
    return true;
};