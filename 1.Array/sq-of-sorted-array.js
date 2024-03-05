var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    const arr = [];
    while (left <= right) {
        if (Math.pow(nums[left], 2) < Math.pow(nums[right], 2)) {
            arr.unshift(Math.pow(nums[right], 2));
            right--;
        }
        else if (Math.pow(nums[left], 2) > Math.pow(nums[right], 2)) {
            arr.unshift(Math.pow(nums[left], 2));
            left++;
        }
        else {
            if(left == right){
                arr.unshift(Math.pow(nums[left], 2));
                break;
            }
            arr.unshift(Math.pow(nums[left], 2));
            arr.unshift(Math.pow(nums[right], 2));
            right--;
            left++;
        }
    }
    return arr;
};
console.log(sortedSquares([-4, -3, 0, 2, 10]));