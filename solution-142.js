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
    return { head: nodes[0], cycleNode: pos !== -1 ? nodes[pos] : null };
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
    let fast = head,
        slow = head;
    let count = 0;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        console.log("slow ", slow.val);
        console.log("fast ", fast.val);
        count++;
        if (fast === slow) {
            console.log("here we go ", count);
            return slow;
        }
    }
    console.log(count);
    return -1;
};

const tests = [
    { values: [1, 2, 3, -4, 4, 5, 7, 8, 9], pos: 1, expectedVal: 2 },
    { values: [1, 2], pos: 0, expectedVal: 1 },
    { values: [1], pos: -1, expectedVal: null },
    { values: [], pos: -1, expectedVal: null },
];

let passed = 0;
for (const { values, pos, expectedVal } of tests) {
    const { head, cycleNode } = buildList(values, pos);
    const result = detectCycle(head);
    const ok = result === cycleNode;
    const resultStr = result ? result.val : null;
    const expectedStr = cycleNode ? cycleNode.val : null;
    console.log(
        `values=[${values}] pos=${pos} => node(${resultStr}) (expected node(${expectedStr})) ${ok ? "PASS" : "FAIL"}`,
    );
    if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed`);
