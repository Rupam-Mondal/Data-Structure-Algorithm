public class number_of_ele_lessthan {
    public int solve(int[] arr, int B) {
        int left = 0;
        int right = arr.length - 1;
        int res = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] <= B) {
                res = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res + 1;
    }
}
