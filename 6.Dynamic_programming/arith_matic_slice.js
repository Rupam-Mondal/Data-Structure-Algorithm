let arr;
let dp;
function f(i) {
    if (i == 0 || i == 1) return 0;
    if (arr[i] - arr[i - 1] != arr[i - 1] - arr[i - 2]) {
        return dp[i] = 0;
    }
    else {
        return dp[i] = 1 + f(i - 1);
    }
}
var numberOfArithmeticSlices = function (nums) {
    dp = Array(5005).fill(-1);
    arr = nums;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + f(i);
    }
    return sum;
};