/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
if(arr.length<3)
    return false
  let start = 0 
  let end = arr.length-1
  
 while (start < end) {
        if (arr[start+1] > arr[start]) {
          start++;
        } else if (arr[end-1] > arr[end]) { 
          end--;
        } else {
          break;
        }
      }
  return start == end && start!=0 && end!=arr.length-1
};
