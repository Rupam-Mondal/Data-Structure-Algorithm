let matrix;
let dp;
function f(i, j) {
    if (i == matrix.length - 1) {
        return matrix[i][j];
    }
    if (dp[i][j] != -1) return dp[i][j];
    let left = f(i + 1, j);
    let right = f(i + 1, j + 1);
    return dp[i][j] = matrix[i][j] + Math.min(left, right);
}
var minimumTotal = function (triangle) {
    matrix = triangle;
    dp = Array(205);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(205).fill(-1);
    }
    return f(0, 0);
};