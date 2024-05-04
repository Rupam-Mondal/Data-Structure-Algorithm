function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function traverse(root, arr) {
    if (root === null) return;
    traverse(root.left, arr);
    arr.push(root.val);
    traverse(root.right, arr);
}

function inorderTraversal(root) {
    let arr = [];
    traverse(root, arr);
    return arr;
}
