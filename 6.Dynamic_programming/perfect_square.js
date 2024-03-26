let c;
let dp;
function f(n) {
    if (n < 0) return Number.MAX_SAFE_INTEGER;
    if (n == 0) return 0;
    if (dp[n] != -1) return dp[n];
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i * i <= n; i++) {
        if (n >= i) {
            ans = Math.min(ans, f(n - i * i));
        }
    }
    if (ans == Number.MAX_SAFE_INTEGER) {
        return dp[n] = Number.MAX_SAFE_INTEGER;
    }
    return dp[n] = 1 + ans;
}
var numSquares = function (n) {
    dp = Array(10005).fill(-1);
    let ans = f(n);
    return (ans == Number.MAX_SAFE_INTEGER) ? -1 : ans;
};