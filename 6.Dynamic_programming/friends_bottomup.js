let dp;
let mod = 1000000007;

function f(n) {
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n ; i++) {
        dp[i] = dp[i - 1] + (i - 1) * dp[i - 2];
    }
    return (dp[n] % mod);
}

function name(n) {
    dp = Array(n + 1).fill(-1);
    return f(n);
}