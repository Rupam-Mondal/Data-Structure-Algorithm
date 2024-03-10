public class bubble_sort2{
    public static void bubble(int[] arr , int i , int j){
        if(i == arr.length - 1) return;
        if(j == arr.length - i - 1) {
            bubble(arr, i + 1, 0);
            return;
        }

        if(arr[j] > arr[j + 1]){
            int temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

        bubble(arr, i, j + 1);
    }
    public static void main(String[] args) {
        int[] arr = {2 , 1 , 6 , 4 , 9 , 7};

        bubble(arr, 0, 0);
        for(int num : arr){
            System.out.println(" "+num);
        }
    }
}