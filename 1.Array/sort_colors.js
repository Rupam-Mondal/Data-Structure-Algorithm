var sortColors = function (nums) {
    let p0 = 0;
    let p = 0;
    let p2 = nums.length - 1;
    while (p <= p2) {
        if (nums[p] == 0) {
            let temp = nums[p0];
            nums[p0] = nums[p];
            nums[p] = temp;
            p++;
            p0++;
        }
        else if (nums[p] == 2) {
            let temp = nums[p2];
            nums[p2] = nums[p];
            nums[p] = temp;
            p2--;
        }
        else {
            p++;
        }
    }
    return nums;
};