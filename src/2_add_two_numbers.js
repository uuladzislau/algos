/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();

  let carry = 0;
  let node = dummy;

  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    carry = Math.floor(sum / 10);

    node.next = new ListNode(sum % 10);
    node = node.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return dummy.next;
};

describe('2. Add Two Numbers', () => {

  it('Case #1', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const l3 = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(addTwoNumbers(l1, l2)).toStrictEqual(l3);
  });

  it('Case #2', () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const l3 = new ListNode(0);
    expect(addTwoNumbers(l1, l2)).toStrictEqual(l3);
  });

  it('Case #3', () => {
    const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const l3 = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));
    expect(addTwoNumbers(l1, l2)).toStrictEqual(l3);
  });
});