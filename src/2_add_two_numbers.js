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

  const sum = (l1, l2, carry) => {
    if (l1 === null && l2 === null) {
      return (carry === 0) ? null : new ListNode(carry);
    };

    const val1 = (l1 === null) ? new ListNode() : l1;
    const val2 = (l2 === null) ? new ListNode() : l2;

    let res = val1.val + val2.val;

    if (carry > 0) {
      res++;
      carry--;
    }

    if (res > 9) {
      res -= 10;
      carry++;
    }

    return new ListNode(res, sum(val1.next, val2.next, carry));
  };

  return sum(l1, l2, 0);
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