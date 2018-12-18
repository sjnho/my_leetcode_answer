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
var swapPairs = function(head) {
    let cur = head
    while(cur && cur.next){
      let a = cur,b = a.next 
      cur = b
      b.next = a
      a.next = b.next
    }
};
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)


console.log(JSON.stringify(swapPairs(head)))