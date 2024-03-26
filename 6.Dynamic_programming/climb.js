let dp;
function f(n){
    if(n == 1 ||n == 2) return n;
    if(dp[n] != -1) return dp[n];
    return dp[n] = f(n - 1) + f(n - 2);
}
var climbStairs = function(n) {
    dp = Array(50).fill(-1);
    return f(n);
};