class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function swap(node) {
    if (node === null) return;

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
}

function inverse(root) {
    if (root === null) return;

    swap(root);

    inverse(root.left);
    inverse(root.right);
}

function invertTree(root) {
    inverse(root);
    return root;
}
