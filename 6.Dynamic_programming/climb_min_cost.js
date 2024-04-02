let c;
let dp;
function f(i){
    if(i >= c.length){
        return 0;
    }

    if(dp[i] != -1) return dp[i];

    if(c.length == 1) return c[0];
    let first = c[i] + f(i + 1);
    let second = c[i] + f(i + 2);

    return dp[i] = Math.min(first , second);
}
var minCostClimbingStairs = function(cost) {
   c = cost;
   dp = Array(1005).fill(-1);
   let ans1 = f(0);
   let ans2 = f(1);

   return Math.min(ans1 , ans2);
};