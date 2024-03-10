public class arrange_coins{
    public int arrangeCoins(int n) {
        long left = 1;
        long right = n;
        long res = 1;
        while(left <= right){
            long mid = left + (right - left) / 2;
            long ans = (mid * (mid + 1)) / 2;
            if(ans <= n){
                res = mid;
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
        return (int)res;
    }
}