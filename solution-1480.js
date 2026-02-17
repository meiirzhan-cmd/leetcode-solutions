/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
};

// Test
console.log(runningSum([3, 1, 2, 10, 1])); // Expected: [0, 1]
