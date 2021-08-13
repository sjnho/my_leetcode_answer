/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1 && l2){
      let cur1 = l1,cur2=l2
      let head = new ListNode()
      let cur = head
      while(cur1&&cur2){
        if(cur1.val<cur2.val){
          cur.next = cur1
          cur1 = cur1.next
        }else{
          cur.next = cur2
          cur2 = cur2.next
        }
        cur = cur.next
      }
      cur.next = cur1 === null?cur2:cur1
      return head.next
    }else if(!l1 && !l2){
      return null
    }else{
      return l1 || l2
    }
   
};