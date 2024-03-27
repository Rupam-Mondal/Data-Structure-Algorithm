public class bouquets {
    public static boolean possible(int[] nums, int m, int k, int mid) {
        int bcount = 0;
        int fcount = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                fcount++;
            } else {
                bcount += (fcount / k);
                fcount = 0;
            }
        }
        bcount += (fcount / k);
        return bcount >= m;
    }

    public int minDays(int[] nums, int m, int k) {
        int left = 1;
        int right = 0;
        int res = -1;
        for (int i = 0; i < nums.length; i++) {
            right = Math.max(right, nums[i]);
        }
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (possible(nums, m, k, mid)) {
                res = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return res;
    }
}
