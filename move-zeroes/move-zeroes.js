/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let c = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]==0){
            nums.splice(i,1)
            c++;
            i--;
        }
    }
    for(let i=0;i<c;i++){
        nums.push(0)
    }
};