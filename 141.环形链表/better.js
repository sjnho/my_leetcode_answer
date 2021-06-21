var hasCycle = function(head) {
  if(head === null){
    return false
  }
  let fast= head;
  let slow = head;
  while(slow){
    slow = slow.next;
    fast = fast.next;
    if(fast.next){
      fast = fast.next
    }
    if(slow === fast || fast.next === slow){
      return true
    }
  }
  return false
  
};