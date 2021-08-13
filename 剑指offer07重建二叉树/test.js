/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * preorder = [root, [left子树的前序遍历结果],[right子树的前序遍历结果]]
 * inorder = [[left子树的中序遍历结果],root，[right子树的中序遍历结果]]
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 function TreeNode(val) {
       this.val = val;
       this.left = this.right = null;
   }
const indexMap = new Map();
var buildTree = function(preorder, inorder) {
    const n = preorder.length
    for(let i=0;i<n;i++){
      indexMap.set(inorder[i],i)
    }
    return myBuildTree(preorder,inorder,0,n-1,0,n-1);
};

var myBuildTree = function(preorder,inorder,preorder_left,preorder_right,inorder_left,inorder_right){

    if (preorder_left > preorder_right) {
      return null;
    }
    const preorder_root = preorder[preorder_left]
    const inorder_root = indexMap.get(preorder_root)
    const root = new TreeNode(preorder_root)
    const size_left_subtree = inorder_root - inorder_left;
    root.left = myBuildTree(preorder,inorder,preorder_left+1,preorder_left+size_left_subtree,inorder_left,inorder_root-1)
    root.right = myBuildTree(preorder,inorder,preorder_left+size_left_subtree+1,preorder_right,inorder_root+1,inorder_right)
    return root
}


buildTree([3,9,20,15,7],[9,3,15,20,7])