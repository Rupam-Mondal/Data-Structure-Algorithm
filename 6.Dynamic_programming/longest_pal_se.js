let c;
let dp;
function f(i, j) {
    if (i > j) return 0;
    if (i == j) return 1;
    if (dp[i][j] != -1) return dp[i][j];
    if (c[i] == c[j]) {
        return dp[i][j] = 2 + f(i + 1, j - 1);
    }
    else {
        return dp[i][j] = Math.max(f(i + 1, j), f(i, j - 1));
    }
}
var longestPalindromeSubseq = function (s) {
    c = s;
    dp = Array(1005);
    for (let i = 0; i < 1005; i++) {
        dp[i] = Array(1005).fill(-1);
    }
    return f(0, s.length - 1);
};