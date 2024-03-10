public class search_insert_pos{
    public static int searchInsert(int[] nums, int target) {
       int left = 0;
       int right = nums.length - 1;
       int res = nums.length;
       while(left <= right){
           int mid = left + (right - left) / 2;
            if(nums[mid] >= target){
                res = mid;
                right = mid -1;
            }
            else if(nums[mid] < target){
                left = mid + 1;
            }
       }
       return res;
    }
}