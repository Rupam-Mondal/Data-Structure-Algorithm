var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    for(j = 0 ; j < nums.length ; j++){
        if(nums[j] != 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
    return nums;
};