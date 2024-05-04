class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    static height(root) {
        if (root === null) return 0;
        return 1 + Math.max(Solution.height(root.left), Solution.height(root.right));
    }

    isBalanced(root) {
        if (root === null) return true;
        if (!this.isBalanced(root.left)) return false;
        if (!this.isBalanced(root.right)) return false;
        let left = Solution.height(root.left);
        let right = Solution.height(root.right);
        return Math.abs(left - right) <= 1;
    }
}
