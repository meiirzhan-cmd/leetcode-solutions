/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const count = {};
    for (const ch of magazine) {
        count[ch] = (count[ch] || 0) + 1;
    }
    for (const ch of ransomNote) {
        if (!count[ch]) return false;
        count[ch]--;
    }
    return true;
};

console.log(canConstruct("a", "b")); // false - letter not in magazine
console.log(canConstruct("aa", "ab")); // false - need 2 a's, only 1
console.log(canConstruct("aa", "aab")); // true  - 2 a's available
console.log(canConstruct("a", "a")); // true  - exact match
console.log(canConstruct("abc", "cba")); // true  - same letters, diff order
console.log(canConstruct("aaa", "aa")); // false - need 3 a's, only 2
console.log(canConstruct("ab", "xyzab")); // true  - extra letters are fine
console.log(canConstruct("abcdef", "abc")); // false - ransom longer than magazine
console.log(canConstruct("z", "abcdy")); // false - letter completely missing
console.log(canConstruct("abcc", "abc")); // false - need 2 c's, only 1
console.log(canConstruct("abab", "aabb")); // true  - same frequencies
