var hasCycle = function(head) {
  if(head === null){
    return false
  }
  let fast= head;
  let slow = head;
  while(slow && fast){
    if(fast.next === slow){
      return true
    }
    slow = slow.next;
    fast = fast.next;
    if(fast && fast.next){
      fast = fast.next
    }
  }
  return false
  
};