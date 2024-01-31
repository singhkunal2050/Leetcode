/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
 const n = nums.length;
    const result = new Array(n).fill(1);

    // Calculate products of all numbers to the left of each box
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate products of all numbers to the right of each box and multiply with left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
};
















