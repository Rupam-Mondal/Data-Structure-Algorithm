let c;
let dp;
function f(i, j) {
    if (i >= c.length || j >= c[0].length) {
        return Infinity;
    }
    if (i == c.length - 1 && j == c[0].length - 1) {
        return dp[i][j] = c[i][j];
    }

    if (dp[i][j] != -1) return dp[i][j];

    let right = c[i][j] + f(i, j + 1);
    let down = c[i][j] + f(i + 1, j);

    return dp[i][j] = Math.min(right, down);
}
var minPathSum = function (grid) {
    c = grid;
    dp = Array(205);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(205).fill(-1);
    }
    return f(0, 0);
};