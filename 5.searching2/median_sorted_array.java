public class median_sorted_array {
    public static int[] merge(int[] nums1, int m, int[] nums2, int n) {
        int i = 0, j = 0, k = 0;
        int[] res = new int[m + n];
        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                res[k++] = nums1[i++];
            } else {
                res[k++] = nums2[j++];
            }
        }

        while (i < m) {
            res[k++] = nums1[i++];
        }

        while (j < n) {
            res[k++] = nums2[j++];
        }

        return res;
    }

    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] arr = new int[nums1.length + nums2.length];
        arr = merge(nums1, nums1.length, nums2, nums2.length);
        double sum = 0;
        if (arr.length % 2 == 0) {
            sum = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
            return sum;
        }
        return arr[(arr.length + 1) / 2];
    }
    public static void main(String[] args) {
        int[] nums1 = {1,3}; 
        int[] nums2 = {2};
        findMedianSortedArrays(nums1, nums2);
    }
}
