var mySqrt = function (x) {
    let left = 1;
    let right = x;
    let res = -1;
    if (x == 0) return 0;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let ans = mid * mid;
        if (ans <= x) {
            res = mid;
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return res;
};