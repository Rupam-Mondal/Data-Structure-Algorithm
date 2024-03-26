let c;
let dp;
function f(amount){
    if(amount < 0) return Number.MAX_SAFE_INTEGER;
    if(amount == 0) return 0;
    if(dp[amount] != -1) return dp[amount];
    let ans = Number.MAX_SAFE_INTEGER;
    for(let i = 0 ; i < c.length ; i++){
        if(amount >= c[i]){
            ans = Math.min(ans , f(amount - c[i]));
        }
    }
    if(ans == Number.MAX_SAFE_INTEGER){
        return dp[amount] = Number.MAX_SAFE_INTEGER;
    }
    return dp[amount] = 1 + ans;
}
var coinChange = function(coins, amount) {
    c = coins;
    dp = Array(10005).fill(-1);
    let ans = f(amount);
    return (ans == Number.MAX_SAFE_INTEGER) ? -1 : ans;
};