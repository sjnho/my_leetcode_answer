function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
if(head === null){
return null
}
var cur = null
var pre = head
while(pre !== null){
  const tmp = pre.next;
  pre.next = cur
  cur = pre
  pre = tmp
};
return cur
}

const input = new ListNode(1)
let cur = input
for(let i = 2 ; i <= 5 ; i++){
cur.next = new ListNode(i)
cur = cur.next
}
console.log('input',JSON.stringify(input))
console.log('output',JSON.stringify(reverseList(input)));