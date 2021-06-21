var hasCycle = function(head) {
  if(head === null){
    return false
  }
  const hashSet = new Set()
  while(head){
    if(hashSet.has(head)){
      return true
    }
    hashSet.add(head)
    head = head.next
  }
  return false
  
};