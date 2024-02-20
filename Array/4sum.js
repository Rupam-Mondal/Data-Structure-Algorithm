var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }
    const arr = [];
    nums.sort((a, b) => a - b);
    let i = 0;
    let k = nums.length - 1;
    while (i < k) {
        let j = i + 1;
        let l = k - 1;
        while (j < l) {
            let sum = nums[i] + nums[j] + nums[l] + nums[k];
            if (sum > target) {
                l--;
            }
            else if (sum < target) {
                j++;
            }
            else {
                const arr1 = [nums[i], nums[j], nums[l], nums[k]];
                arr.push(arr1);
                j++;
                l--;
                while (j < l && nums[j - 1] == nums[j]) j++;
                while (j < l && nums[l] == nums[l + 1]) l--;
            }
        }
        i++;
        k--;
    }
    return arr;
};


console.log(fourSum([-3, -1, 0, 2, 4, 5] , 0));