class Solution {
    static path(root, arr, arr1) {
        if(root === null) return;
        arr1.push(root.data);
        if(root.left === null && root.right === null) {
            arr.push([...arr1]); // Copy arr1 to add to arr
        }
        this.path(root.left, arr, arr1.slice()); // Pass a copy of arr1 to the left child
        this.path(root.right, arr, arr1.slice()); // Pass a copy of arr1 to the right child
    }
    
    static Paths(root) {
        const arr = [];
        this.path(root, arr, []);
        return arr;
    }
}
