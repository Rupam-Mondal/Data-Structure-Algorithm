public class koko_eating_banana{
    public static boolean check(int[] piles, int h, int mid) {
        int count = 0;
        for (int i = 0; i < piles.length; i++) {
            count += Math.ceil((double) piles[i] / mid);
        }
        return count <= h;
    }

    public int minEatingSpeed(int[] piles, int h) {
        int low = 1;
        int hi = 0;
        for (int num : piles) {
            hi = Math.max(hi, num);
        }
        int ans = hi;
        while (low <= hi) {
            int mid = low + (hi - low) / 2;
            if (check(piles, h, mid)) {
                ans = mid;
                hi = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}