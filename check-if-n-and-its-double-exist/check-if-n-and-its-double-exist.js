/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for(var i = 0; i<arr.length; i++){
        for(var j = arr.length-1; j >= 0; j--){
            if((arr[i] === arr[j]*2 || arr[j] === arr[i]*2) && i !== j){
                return true
            }
        }
    }
    return false;
};