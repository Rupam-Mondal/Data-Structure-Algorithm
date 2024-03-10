public class search_2darray{

    public static boolean searchMatrix(int[][] nums, int target) {
        int c = nums[0].length;
        int r = nums.length;

        int left = 0;
        int right = r * c - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int row = mid / c;
            int col = mid % c;
            if (nums[row][col] == target) {
                return true;
            } else if (nums[row][col] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}