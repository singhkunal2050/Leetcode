/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    if(isSameTree(root, subRoot)){
        return true;
    } 
    if(root === null && subRoot == null) return true;
    if(root === null && subRoot != null) return false;
    if(root !== null && subRoot == null) return true;
    
    return isSubtree(root.left, subRoot)  || isSubtree(root.right, subRoot);
    
};


var isSameTree = function(t1, t2) {
    if(t1 === null && t2 === null) return true;
    if(t1 === null || t2 === null) return false;
    
    if(t1.val != t2.val) return false;
    
    if(t1.val === t2.val) 
        return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);

}