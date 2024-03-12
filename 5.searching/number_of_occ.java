public class number_of_occ {
    public int findCount(final int[] nums, int target) {
        int l = 0;
        int r = nums.length - 1;
        int res1 = -1;
        int res2 = -1;
        while(l <= r){
            int mid = l + (r - l)/2;
            if(nums[mid] == target){
                res1 = mid;
                r = mid - 1;
            }
            else if(nums[mid] > target){
                r = mid - 1;
            }
            else{
                l = mid + 1;
            }
        }
        l = 0;
        r = nums.length - 1;
        while(l <= r){
            int mid = l + (r - l)/2;
            if(nums[mid] == target){
                res2 = mid;
                l = mid + 1;
            }
            else if(nums[mid] > target){
                r = mid - 1;
            }
            else{
                l = mid + 1;
            }
        }
        if(res1 == -1 && res2 == -1) return 0;
        return res2 - res1 + 1;
    }
}