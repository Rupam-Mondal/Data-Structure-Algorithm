public class inverson_count{
    static int count = 0;
    public static int[] merge(int[] nums1, int[] nums2 , int left ,int right , int mid) {
        int i = 0, j = 0, k = 0;
        int m = nums1.length;
        int n = nums2.length;
        int[] res = new int[m + n];
        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                res[k++] = nums1[i++];
            } else {
                count = count + (mid - left + 1);
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

    public static int[] mergeSort(int[] arr, int l, int r ) {
        if (l == r) {
            int[] baseCase = new int[1];
            baseCase[0] = arr[l];
            return baseCase;
        }
        int mid = (l + r) / 2;
        int[] left = mergeSort(arr, l, mid);
        int[] right = mergeSort(arr, mid + 1, r);
        return merge(left, right , l , r , mid);
    }

    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1};
        int[] res1 = mergeSort(arr, 0, arr.length - 1);
        res1.toString();
        System.out.println(count);
    }
}