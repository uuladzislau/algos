/**
 * Definition for singly-linked list.
 *
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  /** @type {number} */
  this.val = (val === undefined ? 0 : val);

  /** @type {ListNode} */
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  if (head.val === head.next.val) {
    head = head.next;
    return deleteDuplicates(head);
  }

  head.next = deleteDuplicates(head.next);
  return head;
};


function toString(list) {
  let current = list;

  let str = '' + current.val;

  while (current.next) {
    current = current.next;
    str = str + ' -> ' + current.val;
  }

  return str;
}


describe('83. Remove Duplicates from Sorted List', () => {

  it('Case #1', () => {
    console.log('Case #1');
    const list = new ListNode(1, new ListNode(1, new ListNode(2)));

    expect(toString(deleteDuplicates(list))).toStrictEqual('1 -> 2');
  });

  it('Case #2', () => {
    const list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));

    expect(toString(deleteDuplicates(list))).toStrictEqual('1 -> 2 -> 3');
  });

  it('Case #3', () => {
    expect(deleteDuplicates(null)).toBeNull();
  });
});
