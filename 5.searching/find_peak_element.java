class find_peak_element{
    public int findPeakElement(int[] nums) {
        // if(nums.length == 1) return 0;
        // if(nums[0] > nums[1]) return 0;
        // if(nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
        // int left = 1;
        // int right= nums.length - 2;
        // int mid1 = left + (right - left) / 2;
        // while(left <= right){
        // int mid = left +(right - left) / 2;
        // if(nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
        // else
        // left = mid + 1;
        // }
        // left = 1;
        // right= mid1 - 1;
        // while(left <= right){
        // int mid = left +(right - left) / 2;
        // if(nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
        // else
        // right = mid - 1;
        // }
        // return -1;
        //It is really a cool question
        
        int left = 1;
        int right = nums.length - 2;
        int res = -1;
        if (nums.length == 1)
            return 0;
        if (nums[0] > nums[1])
            return 0;
        if (nums[nums.length - 1] > nums[nums.length - 2])
            return nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[mid + 1]) {
                left = mid + 1;
            } else {
                res = mid;
                right = mid - 1;
            }
        }
        return res;
    }
}