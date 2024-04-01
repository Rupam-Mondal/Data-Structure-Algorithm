let c;
let dp;
function f(i) {
    if (i >= c.length) {
        return 0;
    }
    if (c.length == 0) {
        return c[0];
    }

    if (dp[i] != -1) return dp[i];

    let include = c[i] + f(i + 2);
    let exclude = f(i + 1) + 0;

    return dp[i] = Math.max(include, exclude);
}
var rob = function (nums) {
    c = nums;
    dp = Array(105).fill(-1);
    return f(0);
};