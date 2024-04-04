let c;
let dp;
function f(i, j) {
    if (i >= c.length || j >= c[0].length) {
        return 0;
    }
    if (i == c.length - 1 && j == c[0].length - 1) {
        return 1;
    }
    if (c[c.length - 1][c[0].length - 1] == 1) {
        return 0;
    }
    if (c[i][j] == 1) {
        return 0;
    }

    if (dp[i][j] != -1) return dp[i][j];

    let right = f(i + 1, j);
    let down = f(i, j + 1);

    return dp[i][j] = right + down;
}
var uniquePathsWithObstacles = function (nums) {
    if (nums[0][0] == 1) return 0;
    c = nums;
    dp = Array(105);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(105).fill(-1);
    }
    return f(0, 0);
};