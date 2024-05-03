function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function traverse(root, arr, l) {
    if (root === null) {
        return;
    }
    if (arr.length === l) {
        arr.push([root.val]);
    } else {
        arr[l].push(root.val);
    }
    traverse(root.left, arr, l + 1);
    traverse(root.right, arr, l + 1);
}

function levelOrder(root) {
    let arr = [];
    traverse(root, arr, 0);
    return arr;
}
