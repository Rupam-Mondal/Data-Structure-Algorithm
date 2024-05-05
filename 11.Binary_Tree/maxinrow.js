class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    static traverse(root, arr, level) {
        if (root === null) {
            return;
        }
        if (arr.length <= level) {
            arr.push([]);
        }
        arr[level].push(root.val);
        this.traverse(root.left, arr, level + 1);
        this.traverse(root.right, arr, level + 1);
    }

    static findMaxElements(arr) {
        const maxElements = [];
        for (const innerList of arr) {
            let max = Number.MIN_SAFE_INTEGER;
            for (const val of innerList) {
                max = Math.max(max, val);
            }
            maxElements.push(max);
        }
        return maxElements;
    }

    largestValues(root) {
        const arr = [];
        this.traverse(root, arr, 0);
        return Solution.findMaxElements(arr);
    }
}
