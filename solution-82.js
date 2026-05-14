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
const deleteDuplicates = function (head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev.next !== null) {
        let curr = prev.next;
        if (curr.next !== null && curr.val === curr.next.val) {
            while (curr.next !== null && curr.val === curr.next.val) {
                curr = curr.next;
            }
            prev.next = curr.next;
        } else {
            prev = prev.next;
        }
    }

    return dummy.next;
};

const tests = [
    { values: [1, 2, 3, 3, 4, 4, 5], expected: [1, 2, 5] },
    { values: [1, 1, 1, 2, 3], expected: [2, 3] },
    { values: [1, 1, 1, 2, 2, 2, 2, 3], expected: [3] },
    { values: [1, 1], expected: [] },
    { values: [1], expected: [1] },
    { values: [], expected: [] },
];

let passed = 0;
for (const { values, expected } of tests) {
    const head = buildList(values);
    const result = listToArray(deleteDuplicates(head));
    const ok = JSON.stringify(result) === JSON.stringify(expected);
    console.log(
        `values=[${values}] => [${result}] (expected [${expected}]) ${ok ? "PASS" : "FAIL"}`,
    );
    if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed`);
