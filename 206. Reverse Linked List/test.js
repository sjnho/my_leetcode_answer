/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseList = function (head) {
  let cur = head, pre = null,tmpNext =null
  while (cur) {
    tmpNext = cur.next
    cur.next = pre 
    pre = cur
    cur = tmpNext
  }
  return pre
};
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

console.log(JSON.stringify(reverseList(head)))