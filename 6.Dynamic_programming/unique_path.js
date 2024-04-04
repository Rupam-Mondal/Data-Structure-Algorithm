let r;
let c;
let dp;
function f(i, j) {

    if (i >= r || j >= c) {
        return 0;
    }
    if (i == r - 1 && j == c - 1) {
        return 1;
    }

    if (dp[i][j] != -1) return dp[i][j];

    let right = f(i + 1, j);
    let down = f(i, j + 1);

    return dp[i][j] = right + down;
}
var uniquePaths = function (m, n) {
    r = m;
    c = n;
    dp = Array(105);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(105).fill(-1);
    }
    return f(0, 0);
};