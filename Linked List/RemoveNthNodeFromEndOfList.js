/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = head;
  let count = 0;
  while (temp != null) {
    count++;
    temp = temp.next;
  }
  const num = count - n;
  if (count == 1) {
    return null;
  }
  if (num === 0) {
    return head.next;
  }

  let counter = 1;
  let current = head;

  while (counter < num) {
    current = current.next;
    counter++;
  }

  current.next == current;
  return current;
};
