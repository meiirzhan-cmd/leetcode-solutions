class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {

};
// ------------------------------------

function test(list1Arr, list2Arr, expected) {
    const list1 = arrayToList(list1Arr);
    const list2 = arrayToList(list2Arr);
    const result = listToArray(mergeTwoLists(list1, list2));
    const pass = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`list1=${JSON.stringify(list1Arr)}, list2=${JSON.stringify(list2Arr)}`);
    console.log(`  expected : ${JSON.stringify(expected)}`);
    console.log(`  got      : ${JSON.stringify(result)}`);
    console.log(`  ${pass ? "PASS" : "FAIL"}\n`);
}

test([1,2,4], [1,3,4], [1,1,2,3,4,4]);
test([],       [],       []);
test([],       [0],      [0]);
test([-1,0,3], [2,5],    [-1,0,2,3,5]);
test([2],      [1],      [1,2]);
