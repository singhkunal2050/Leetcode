/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        let max = -1;
        for(j=i+1;j<arr.length ; j++){
            if(arr[j]>max)
                max=arr[j]
        }
        arr[i]=max
    }
    return arr
};