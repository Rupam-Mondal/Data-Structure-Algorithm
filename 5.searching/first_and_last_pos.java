public class first_and_last_pos{
    public static int[] searchRange(int[] nums, int target) {
        int[] res = new int[2];
        int l = 0;
        int r = nums.length - 1;
        int res1 = -1;
        int res2 = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                res1 = mid;
                r = mid - 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        res[0] = res1;
        l = 0;
        r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                res2 = mid;
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        res[1] = res2;
        return res;
    }
    public static void main(String[] args) {
        int[] arr = {2 , 3 , 5,7,7,8,8,10};
        int target = 8;
        int[] arr1 = searchRange(arr, target);
        for(int i = 0 ; i < arr1.length ; i++){
            System.out.println(" "+arr1[i]);
        }
    }
}