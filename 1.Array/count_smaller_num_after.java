import java.util.ArrayList;
import java.util.List;

public class count_smaller_num_after{

    public static List<Integer> countSmaller(int[] nums) {
        List<Integer> arr = new ArrayList<>();
        int i = 0;
        if (nums.length == 1) {
            arr.add(0);
            return arr;
        }
        while (i < nums.length - 1) {
            int j = i + 1;
            int k = nums.length - 1;

            int count = 0;
            while (j <= k) {
                if (j == k && nums[j] < nums[i]) {
                    count++;
                    j++;
                    k--;
                    continue;
                }

                if (nums[j] < nums[i]) {
                    count++;
                    j++;
                } else {
                    j++;
                }

                if (nums[k] < nums[i]) {
                    count++;
                    k--;
                } else {
                    k--;
                }
            }
            i++;
            arr.add(count);
        }
        arr.add(0);
        return arr;
    }
    public static void main(String[] args) {
        int[] arr = {5,2,6,1};
        List<Integer> arr1 = countSmaller(arr);
        for(int i = 0 ; i < arr1.size() ; i++){
            System.out.println(" "+arr1.get(i));
        }
    }
}