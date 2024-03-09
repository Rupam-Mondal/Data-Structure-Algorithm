import java.util.Arrays;

public class min_cost{

    public static int cost(int[] nums){
        int costval = 0;
        int sum = 0;
        for(int i = 0 ; i < nums.length ; i++){
            sum = sum + nums[i];
        }
        Arrays.sort(nums);
        for(int i = nums.length - 1 ; i >= 0 ; i--){
            if(i == nums.length - 1){
                costval = sum;
            }
            else{
                sum = sum - nums[i + 1];
                costval = costval + sum;
            }
        }
        return costval;
    }
    public static void main(String[] args) {
        int[] arr = {4 , 6 , 1};
        System.out.println(cost(arr));
    }
}