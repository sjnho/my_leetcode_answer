function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function(root) {
  let leftDepth = 0,rightDepth =0;
    if(root.left){
      leftDepth = maxDepth(root.left)
    }
    if(root.right){
      rightDepth = maxDepth(root.right)
    }
    return Math.max(leftDepth,rightDepth) +1
};
var root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(29)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log('max',maxDepth(root))