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

const addDigits = (l1, l2, tail, digit = 0) => {
    if (l1 !== null || l2 !== null) {
        const l1val = l1.val ?? 0;
        const l2val = l2.val ?? 0;
        let val = l1val + l2val + digit;
        const rem = val >= 10 ? 1 : 0;
        val = rem ? val - 10 : val;
        tail.next = new ListNode(val);
        tail = tail.next;
        console.log(tail);
        if (l1.next !== null || l2.next !== null)
            addDigits(l1.next ?? 0, l2.next ?? 0, tail, rem);
    }
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry > 0) {
        const v1 = l1 === null ? 0 : l1.val;
        const v2 = l2 === null ? 0 : l2.val;
        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
};

const tests = [
    { l1: [3, 4, 3], l2: [4, 6, 4], expected: [7, 0, 8] },
    { l1: [0], l2: [0], expected: [0] },
    {
        l1: [9, 9, 9, 9, 9, 9, 9],
        l2: [9, 9, 9, 9],
        expected: [8, 9, 9, 9, 0, 0, 0, 1],
    },
    { l1: [1], l2: [9, 9, 9], expected: [0, 0, 0, 1] },
    { l1: [5], l2: [5], expected: [0, 1] },
];

let passed = 0;
for (const { l1, l2, expected } of tests) {
    const head1 = buildList(l1);
    const head2 = buildList(l2);
    const result = listToArray(addTwoNumbers(head1, head2));
    const ok = JSON.stringify(result) === JSON.stringify(expected);
    console.log(
        `l1=[${l1}] l2=[${l2}] => [${result}] (expected [${expected}]) ${ok ? "PASS" : "FAIL"}`,
    );
    if (ok) passed++;
}
console.log(`\n${passed}/${tests.length} tests passed`);
