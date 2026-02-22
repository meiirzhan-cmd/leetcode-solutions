/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {

};

// --- Test Runner ---
function runTest(label, nums, expectedNums) {
    const input = [...nums];
    const k = removeDuplicates(nums);

    const kMatch = k === expectedNums.length;
    const numsMatch = expectedNums.every((val, i) => nums[i] === val);
    const passed = kMatch && numsMatch;

    console.log(`${passed ? "PASS" : "FAIL"} | ${label}`);
    if (!passed) {
        console.log(`  Input:    [${input}]`);
        console.log(`  Expected: k=${expectedNums.length}, nums=[${expectedNums}]`);
        console.log(`  Got:      k=${k}, nums=[${nums.slice(0, k)}]`);
    }
}

runTest("Example 1", [1,1,2],             [1,2]);
runTest("Example 2", [0,0,1,1,1,2,2,3,3,4], [0,1,2,3,4]);
runTest("All unique", [1,2,3],             [1,2,3]);
runTest("All same",  [5,5,5,5],            [5]);
runTest("Single",    [7],                  [7]);