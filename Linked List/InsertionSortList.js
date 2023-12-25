/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
  let newHead = new ListNode(0);
  if (!head) return head;
  let prev = head;
  let curr = head.next;
  while (curr) {
    if (curr.val >= prev.val) {
      prev = curr;
      curr = curr.next;
    } else {
      //   let temp = newNode;
      let temp = curr;
      curr = prev;
      prev = temp;
      break;
    }
  }
  return curr.next;
};
