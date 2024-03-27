class merge_two_sorted_array2 {
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

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] arr = new int[nums1.length + nums2.length];
        arr = merge(nums1, nums1.length, nums2, nums2.length);
        int n = arr.length;
        if (n % 2 == 0) {
            double median = (double) (arr[n / 2] + arr[n / 2 - 1]) / 2.0;
            return median;
        }
        return arr[(arr.length - 1) / 2];
    }
}