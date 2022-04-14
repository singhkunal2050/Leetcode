/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
if(arr.length<3)
    return false
  let start = 0 
  let end = arr.length-1
  
  while(start<end){
      if(arr[start]<arr[start+1])
          start++
      else if(arr[end]<arr[end-1])
          end--
      else break
  }
  return start == end && start!=0 && end!=arr.length-1
};
