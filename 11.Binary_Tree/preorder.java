import java.util.ArrayList;
import java.util.List;

import javax.swing.tree.TreeNode;

class preorder {
    
    public static void traverse(TreeNode root , List<Integer> arr){
        if(root == null) return;
        //arr.add(root.val);
        // traverse(root.left , arr);
        // traverse(root.right , arr);
    }
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> arr = new ArrayList<>();
        traverse(root , arr);
        return arr;
    }
}