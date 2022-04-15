/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    temp = []
    let i = 0;
    while(i<nums.length){
        if(nums[i]%2!=0){
            temp.push(nums[i])
            nums.splice(i,1);
            i--;
        }
        i++;
    }
    temp.forEach(elem=>nums.push(elem))
    return nums
};