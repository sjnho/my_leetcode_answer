
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root){
      return []
    }
    const ret = []
    const queue = []
    queue.push(root)
    while(queue.length !== 0 ){
      const data = []
      const levelCount = queue.length
      for(let i=0;i<levelCount;i++){
        const head = queue.shift()
        if(head.left){
          queue.push(head.left)
        }
        if(head.right){
          queue.push(head.right)
        }
        data.push(head.val)
      }
      ret.push(data)
      
    }
    return ret
    
 }
    