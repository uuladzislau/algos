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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
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

describe('21. Merge two sorted lists', () => {

  it('Test case #1', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4, undefined)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4, undefined)));

    const actual = toString(mergeTwoLists(list1, list2));

    expect(actual).toStrictEqual('1 -> 1 -> 2 -> 3 -> 4 -> 4');
  });

  it('Test case #2', () => {
    expect(mergeTwoLists(null, null)).toStrictEqual(null);
  });

  it('Test case #3', () => {
    const list1 = new ListNode(2);
    const list2 = new ListNode(1);

    const actual = toString(
      mergeTwoLists(list1, list2)
    );

    expect(actual).toStrictEqual('1 -> 2');
  });

  it('Test case #4', () => {
    const list1 = new ListNode(-9, new ListNode(3));
    const list2 = new ListNode(5, new ListNode(7));

    const actual = toString(
      mergeTwoLists(list1, list2)
    );

    expect(actual).toStrictEqual('-9 -> 3 -> 5 -> 7');
  });
});
