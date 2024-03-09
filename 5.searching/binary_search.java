public class binary_search {
    public static int binary(int[] arr ,int target){
        int left = 0;
        int right = arr.length - 1;
        while(left <= right){
            int mid = (right - left) / 2 + left;
            if(arr[mid] == target){
                return mid;
            }
            else if(arr[mid] > target){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        return - 1;
    }
    public static void main(String[] args) {
        int[] arr = {1 , 2 , 3 , 4 , 5};
        int target = 5;
        System.out.println(binary(arr, target));
    }
}
