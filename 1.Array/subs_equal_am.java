import java.util.*;

class subs_equal_am {
    public static int minimumOperations(int[] nums) {
        int count = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            if (map.containsKey(num)) {
                map.put(num, map.get(num) + 1);
            } else {
                map.put(num, 1);
            }
        }

        for (int i : map.keySet()) {
            if(i == 0) continue;
            count++;
        }
        return count;
    }

    public static void main(String[] args) {
        int []arr = {1,5,0,3,5};
        int ans = minimumOperations(arr);
        System.out.println(ans);
    }
}
