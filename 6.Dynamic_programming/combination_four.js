let arr;
let dp;
function f(target) {
    if (target == 0) {
        return 1;
    }
    if (dp[target] != -1) return dp[target];
    let res = 0;
    for (let k = 0; k < arr.length; k++) {
        if (target - arr[k] >= 0) {
            res += f(target - arr[k]);
        }
    }
    return dp[target] = res;
}
var combinationSum4 = function (nums, target) {
    dp = Array(1005).fill(-1);
    arr = nums;
    return f(target);
};