function ListNode(val) {
       this.val = val;
       this.next = null;
}

var reverseList = function(head) {
  if(head === null){
    return null
  }
  var newHead = new ListNode()
  var newCur = newHead
  while(true){
    var cur = head.next
    var pre = head
    if(cur === null){
      newCur.next = pre
      return newHead.next
    }  
    while(cur && cur.next){
      pre = cur
      cur = cur.next 
    }
    newCur.next = cur
    newCur = newCur.next
    pre.next = null
  }
};

const input = new ListNode(1)
let cur = input
for(let i = 2 ; i <= 5 ; i++){
  cur.next = new ListNode(i)
  cur = cur.next
}
console.log('input',JSON.stringify(input))
console.log('output',JSON.stringify(reverseList(input)));