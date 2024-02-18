var threeSum = function (nums) {
    const arr = [];
    nums.sort((a , b) => a - b);
    let i = 0;
    while (i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] == 0) {
                const arr1 = [nums[i], nums[j], nums[k]];
                arr.push(arr1);
                j++;
                k--;
            }
            else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            }
            else {
                j++;
            }
        }
        i++;
    }
    return arr;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));