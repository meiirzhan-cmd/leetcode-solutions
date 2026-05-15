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
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head === null || head.next === null) return head;
    const newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};

const tests = [{ values: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] }];

let passed = 0;
for (const { values, expected } of tests) {
    const head = buildList(values);
    const result = listToArray(reverseList(head));
    const ok = JSON.stringify(result) === JSON.stringify(expected);
    console.log(
        `values=[${values}] => [${result}] (expected [${expected}]) ${ok ? "PASS" : "FAIL"}`,
    );
    if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed`);
