public class alocate_books {
    public static boolean possible(int[] nums, int mid, int B) {
        int count = 0;
        int total = 0;
        for (int i = 0; i < nums.length; i++) {
            if (total + nums[i] > mid) {
                count++;
                total = 0;
            }
            total += nums[i];
        }
        count++;
        return count <= B;
    }

    public int books(int[] nums, int B) {
        if (nums == null || nums.length == 0 || B <= 0)
            return -1;
        int max = -1;
        int sum = 0;
        int res = -1;
        for (int i = 0; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
            sum = sum + nums[i];
        }
        int left = max;
        int right = sum;
        if (B > nums.length)
            return -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (possible(nums, mid, B)) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}
