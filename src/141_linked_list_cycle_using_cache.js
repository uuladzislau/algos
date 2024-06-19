/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false;

  const visited = new Set();

  while(head.next !== null) {
    if (visited.has(head)) {
      return true;
    }

    visited.add(head);

    head = head.next;
  }

  return false;
};
