class spli_sub_array{
    public static boolean possible(int[] nums, int mid, int k) {
        int sub_array = 0;
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            if (sum + nums[i] > mid) {
                sub_array++;
                sum = 0;
            }
            sum += nums[i];
        }
        sub_array++;
        return sub_array <= k;
    }

    public int splitArray(int[] nums, int k) {
        int sum = 0;
        int max = -1;
        for (int i = 0; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
            sum = sum + nums[i];
        }
        int right = sum;
        int left = max;
        int res = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (possible(nums, mid, k)) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}