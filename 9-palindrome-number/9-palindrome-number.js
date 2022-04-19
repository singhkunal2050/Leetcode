/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = Array.from(x+'')
    for(let i = 0 , j=a.length-1 ; i < a.length/2 ; i++,j--){
        if(a[i]!=a[j]){
        console.log(a[i] , a[j])
            
            return false
        }    
    }
    return true;
};