class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function buildList(values, pos) {
    if (values.length === 0) return null;
    const nodes = values.map((v) => new ListNode(v));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos !== -1) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    return nodes[0];
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    let fast = head,
        slow = head;
    if (head !== null)
        while (fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                return true;
            }
        }
    return false;
};

const tests = [
    { values: [3, 2, 0, -4], pos: 1, expected: true },
    { values: [1, 2], pos: 0, expected: true },
    { values: [1], pos: -1, expected: false },
    { values: [], pos: -1, expected: false },
];

let passed = 0;
for (const { values, pos, expected } of tests) {
    const head = buildList(values, pos);
    const result = hasCycle(head);
    const ok = result === expected;
    console.log(
        `values=[${values}] pos=${pos} => ${result} (expected ${expected}) ${ok ? "PASS" : "FAIL"}`,
    );
    if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed`);
