function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function traverse(root, arr) {
    if (root === null) return;
    traverse(root.left, arr);
    traverse(root.right, arr);
    arr.push(root.val);
}

function postorderTraversal(root) {
    let arr = [];
    traverse(root, arr);
    return arr;
}
