let dp;
let s1, s2;
function f(s1, s2, i, j) {
    if (i == -1 || j == -1) {
        return 0;
    }
    if (dp[i][j] != -1) return dp[i][j];
    if (s1[i] == s2[j]) {
        return dp[i][j] = 1 + f(s1, s2, i - 1, j - 1);
    }
    else {
        return dp[i][j] = Math.max(f(s1, s2, i - 1, j), f(s1, s2, i, j - 1))
    }
}
var longestCommonSubsequence = function (text1, text2) {
    s1 = text1;
    s2 = text2;
    dp = Array(1005);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(1005).fill(-1);
    }
    return f(s1, s2, text1.length - 1, text2.length - 1);
};