class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function sum(root, sum) {
    if (root === null) return 0;
    sum = sum * 10 + root.val;`2`
    if (root.left === null && root.right === null) return sum;
    return sum(root.left, sum) + sum(root.right, sum);
}

function sumNumbers(root) {
    return sum(root, 0);
}