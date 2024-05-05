class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function traverse(root, arr, l) {
    if (root === null) {
        return;
    }
    if (arr.length === l) {
        let arr1 = [];
        arr1.push(root.val);
        arr.push(arr1);
    } else {
        arr[l].push(root.val);
    }
    traverse(root.left, arr, l + 1);
    traverse(root.right, arr, l + 1);
}

function findBottomLeftValue(root) {
    let arr = [];
    traverse(root, arr, 0);
    return arr[arr.length - 1][0];
}
