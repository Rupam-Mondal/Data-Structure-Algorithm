public class merge_sort {
    public static int[] merge(int[] nums1, int[] nums2) {
        int i = 0, j = 0, k = 0;
        int m = nums1.length;
        int n = nums2.length;
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

    public static int[] mergeSort(int[] arr, int l, int r) {
        if (l == r) {
            int[] baseCase = new int[1];
            baseCase[0] = arr[l];
            return baseCase;
        }
        int mid = (l + r) / 2;
        int[] left = mergeSort(arr, l, mid);
        int[] right = mergeSort(arr, mid + 1, r);
        return merge(left, right);
    }

    public static void main(String[] args) {
        int[] arr1 = { 6, 5, 2, 10, 11, 6 };
        int[] arr = mergeSort(arr1, 0, arr1.length - 1);
        System.out.println("Sorted Array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
