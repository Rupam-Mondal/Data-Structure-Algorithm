class min_max_pair{
    public static boolean possible(int[] nums , int mid , int p){
        int count = 0;
        int i = 0;
        while(i < nums.length - 1){
            if(nums[i + 1] - nums[i] <= mid){
                count++;
                i = i + 2;
            }
            else{
                i++;
            }
        }
        return count>=p;
    }
    public int minimizeMax(int[] nums, int p) {
        Arrays.sort(nums);
        int left = 0;
        int right = nums[nums.length - 1] - nums[0];
        int res = -1;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(possible(nums , mid , p)){
                res = mid;
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        return res;
    }
}