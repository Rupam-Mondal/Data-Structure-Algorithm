var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (i != j - 1 && nums[j] == nums[j - 1]) continue;
            let k = j + 1;
            let l = nums.length - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum > target) {
                    l--;
                }
                else if (sum < target) {
                    k++;
                }
                else {
                    const arr1 = [nums[i], nums[j], nums[k], nums[l]];
                    arr.push(arr1);
                    k++;
                    l--;
                    while (k < l && nums[k] == nums[k - 1]) k++;
                    while (k < l && nums[l] == nums[l + 1]) l--;
                }
            }
        }
    }
    return arr;
};


console.log(fourSum([-3, -1, 0, 2, 4, 5] , 0));