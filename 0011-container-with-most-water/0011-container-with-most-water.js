/**
 * @param {number[]} height
 * @return {number}
 */
// BRUTE FORCE
// var maxArea = function(height) {
//     let maxArea = -1;
    
//     for(let i = 0 ; i < height.length ; i++) {
//         for(let j = i + 1 ; j < height.length ; j++) {
//             let currentContainerHeight = Math.min(height[i], height[j]);
//             let currentContainerWidth = j - i;
//             let currentArea = currentContainerHeight * currentContainerWidth;
//             maxArea = Math.max(currentArea, maxArea);;
//         }
//     }
//     return maxArea;
// };

// 2 Pointer
var maxArea = function(height) {
    let maxArea = -1;
    let [l, r] = [0, height.length -1];
    
    while(l < r) {
        let currentContainerHeight = Math.min(height[l], height[r]);
        let currentContainerWidth = r - l;
        let currentArea = currentContainerHeight * currentContainerWidth;
        maxArea = Math.max(currentArea, maxArea);
        
        // Move the pointer with the low height to Maximize Area
        if(height[l] <= height[r]){
            l++;
        } else {
            r--;
        }
        
        
    }
    
    return maxArea;
};