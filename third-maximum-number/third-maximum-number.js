/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function(nums) {
//     for(let i = 0 ; i<nums.length ; i++){
//         for(j=i+1;j<nums.length;j++){
//             if(nums[i]==nums[j]){
//                 delete nums[i]
//                 i--;
//             }
//         }
//         if(nums.length>2)
//             return nums[nums.length-1]
//         else 
//             return Math.max(...nums)
//     }
// };

function thirdMax(nums) {
	let [first, second, third] = Array(3).fill(-Infinity);
    for (const n of nums) {
        if ([first, second, third].includes(n)) {
            continue;
        }
        if (n > first) {
            [first, second, third] = [n, first, second];
        } else if (n > second) {
            [second, third] = [n, second];
        } else if (n > third) {
            third = n
        }
    }
    return third === -Infinity ? first : third;
}