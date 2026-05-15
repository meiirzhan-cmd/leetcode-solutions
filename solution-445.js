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

// function reverseList(l1) {
//     if (l1 === null || l1.next === null) return l1;
//     const newVar = reverseList(l1.next);

//     l1.next.next = l1;
//     l1.next = null;

//     return newVar;
// }

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// const addTwoNumbers = function (l1, l2) {
//     l1 = reverseList(l1);
//     l2 = reverseList(l2);
//     console.log(l1);
//     const dummy = new ListNode(0);
//     let tail = dummy;
//     let carry = 0;
//     while (l1 !== null || l2 !== null || carry > 0) {
//         const v1 = l1 === null ? 0 : l1.val;
//         const v2 = l2 === null ? 0 : l2.val;
//         const sum = v1 + v2 + carry;
//         carry = Math.floor(sum / 10);

//         tail.next = new ListNode(sum % 10);
//         tail = tail.next;
//         if (l1) l1 = l1.next;
//         if (l2) l2 = l2.next;
//     }

//     return reverseList(dummy.next);
// };

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const s1 = [];
    const s2 = [];
    while (l1) {
        s1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        s2.push(l2.val);
        l2 = l2.next;
    }
    let head = null;
    let carry = 0;
    while (s1.length || s2.length || carry > 0) {
        const v1 = s1.length ? s1.pop() : 0;
        const v2 = s2.length ? s2.pop() : 0;
        const sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        const node = new ListNode(sum % 10);
        node.next = head;
        head = node;
    }

    return head;
};

const tests = [
    { l1: [7, 2, 4, 3], l2: [5, 6, 4], expected: [7, 8, 0, 7] },
    { l1: [2, 4, 3], l2: [5, 6, 4], expected: [8, 0, 7] },
    { l1: [0], l2: [0], expected: [0] },
    { l1: [5], l2: [5], expected: [1, 0] },
    { l1: [9, 9, 9], l2: [1], expected: [1, 0, 0, 0] },
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
