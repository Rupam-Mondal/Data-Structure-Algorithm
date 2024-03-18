package recursion;
public class selection_sort2 {
    public static void selection(int[] arr , int i , int j){
        if(i == arr.length - 2) return;
        if(j == arr.length - 1){
            selection(arr, i + 1, i + 2);
            return;
        }

        int min = i;
        if(arr[j] < arr[min]){
            min = j;
        }
        if(min != i){
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }

        selection(arr, i, j + 1);
    }
    public static void main(String[] args) {
        int[] arr = { 2, 1, 6, 4, 9, 7 };
        int i = 0;
        selection(arr, i, i + 1);
        for (int num : arr) {
            System.out.println(" " + num);
        }
    }
}
