public class perfect_square {
    public boolean isPerfectSquare(int num) {
        if (num <= 1)
            return true;
        long left = 1;
        long right = num;
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long ans = mid * mid;
            if (ans == num) {
                return true;
            } else if (ans < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}
