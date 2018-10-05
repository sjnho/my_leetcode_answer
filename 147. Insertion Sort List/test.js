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
function ListNode(val){
  this.val = val
  this.next = null
}
var insertionSortList = function(head) {
  let zero =   new ListNode(0)
  let pre = zero
  let cur = head
  let next
  while(cur != null){
    next = cur.next
    while(pre.next != null && pre.next.val < cur.val){
      pre = pre.next
    }
    cur.next = pre.next
    pre.next = cur
    pre = zero
    cur = next
  }
  return zero.next
};
let head = new ListNode(4)
head.next = new ListNode(2)
head.next.next = new ListNode(1)
head.next.next.next = new ListNode(3)
let result = insertionSortList(head)
while(result){
  console.log(result.val + "->")
  result = result.next
}