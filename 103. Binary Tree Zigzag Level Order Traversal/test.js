/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var zigzagLevelOrder = function (root) {
    if(root == null){
      return []
    }
    let ret = [],depth = 1,curList = [root],nextList = [];
    while (curList.length != 0){
      let level = []
      while(curList.length !=0 ){
          let temp = curList.shift()
          temp.left && (nextList.push(temp.left))
          temp.right && (nextList.push(temp.right))
          level.push(temp.val)   
      }
      depth % 2 === 0 &&(level.reverse())
      ret.push(level)
      curList = nextList
      nextList = []
      depth ++
    }
    return ret
};

let node3 = new TreeNode(20)
node3.left = new TreeNode(15)
node3.right = new TreeNode(7)
let node = new TreeNode(3)
node.left = new TreeNode(9)
node.right = node3
console.log(JSON.stringify(zigzagLevelOrder(node)))