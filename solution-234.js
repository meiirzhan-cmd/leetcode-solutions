class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function buildList(values) {
    if (values.length === 0) return null;
    const nodes = values.map((v) => new ListNode(v));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    return nodes[0];
}

function listToArray(head) {
    const result = [];
    let curr = head;
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    return result;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let prev = null;
    while (slow !== null) {
        const next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    while (prev !== null) {
        console.log(prev);
        console.log(head);
        if (prev.val !== head.val) {
            return false;
        }
        prev = prev.next;
        head = head.next;
    }
    return true;
};

const tests = [
    { values: [1, 2, 2, 1], expected: true },
    { values: [1, 2], expected: false },
    { values: [1], expected: true },
    { values: [1, 2, 1], expected: true },
    { values: [1, 2, 3, 2, 1], expected: true },
    { values: [1, 0, 1], expected: true },
    { values: [1, 2, 3, 4], expected: false },
];

let passed = 0;
for (const { values, expected } of tests) {
    const head = buildList(values);
    const result = isPalindrome(head);
    const ok = result === expected;
    console.log(
        `values=[${values}] => ${result} (expected ${expected}) ${ok ? "PASS" : "FAIL"}`,
    );
    if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed`);
