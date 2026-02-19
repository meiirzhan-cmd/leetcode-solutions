/**
 * @param {number[]} nums
 * @return {number[]}
 */
const maximumWealth = function (accounts) {
    let rich = 0;
    for (const i of accounts) {
        let sum = 0;
        for (const money of i) {
            sum += money;
        }
        rich = Math.max(rich, sum);
    }
    return rich;
};

// Test
console.log(
    maximumWealth([
        [3, 1, 2, 10, 1],
        [3, 5, 4, 6, 8],
    ]),
); // Expected: [0, 1]

const maximumWealth2 = function(accounts) {
  
    let result=accounts.map(access=>access.reduce((total,money)=>total+money,0))
        let wealth=Math.max(...result)
        return wealth
};