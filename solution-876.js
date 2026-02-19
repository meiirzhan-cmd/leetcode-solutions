function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Helper: build linked list from array
function buildList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper: convert linked list to array for display
function listToArray(node) {
    const result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
    let middleNode = head;
    let end = head;
    while (end !== null && end.next !== null) {
        middleNode = middleNode.next;
        end = end.next.next;
    }
    return middleNode;
};

// Test cases
const test1 = buildList([1, 2, 3, 4, 5]);
console.log(listToArray(middleNode(test1))); // Expected: [3, 4, 5]

const test2 = buildList([1, 2, 3, 4, 5, 6]);
console.log(listToArray(middleNode(test2))); // Expected: [4, 5, 6]

const test3 = buildList([1]);
console.log(listToArray(middleNode(test3))); // Expected: [1]

const test4 = buildList([1, 2]);
console.log(listToArray(middleNode(test4))); // Expected: [2]
