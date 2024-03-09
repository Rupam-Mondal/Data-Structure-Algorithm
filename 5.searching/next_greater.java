public class next_greater {
    public static int greater(int[] arr , int target){
        int left = 0;
        int right = arr.length - 1;
        int res = -1;
        while(left <= right){
            int mid = left + (right - left) / 2;
            if(arr[mid] > target){
                res = arr[mid];
                right = mid - 1;
            }
            else if(arr[mid] < target){
                left = mid + 1;
            }
            else{
                return arr[mid];
            }
        }
        return res;
    }
    public static void main(String[] args) {
        int[] arr = {1 , 2 , 3 , 6 , 10};
        int target = 11;

        System.out.println(greater(arr, target));
    }
}
