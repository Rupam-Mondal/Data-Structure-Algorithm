import java.util.Arrays;

public class min_max_pair {
    public int minPairSum(int[] nums) {
        Arrays.sort(nums);
        int sum = 0;
        for(int i = 0 ; i < nums.length / 2 ; i++){
            int ans = nums[i] + nums[nums.length - i - 1];
            sum = Math.max(sum , ans);
        }
        return sum;
    }
}
