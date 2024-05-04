class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function height(root) {
    if (root === null) return 0;
    let left = height(root.left);
    let right = height(root.right);
    return 1 + Math.max(left, right);
}

function diameterOfBinaryTree(root) {
    if (root === null) return 0;
    let rootDiameter = height(root.left) + height(root.right);
    let leftDiameter = diameterOfBinaryTree(root.left);
    let rightDiameter = diameterOfBinaryTree(root.right);
    return Math.max(rootDiameter, leftDiameter, rightDiameter);
}
