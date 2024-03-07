public class merge_two_sorted_array2{

    public static int[] merge(int[] nums1 , int m , int[] nums2 , int n){
        int i = 0 , j = 0 , k = 0;

        int[] res = new int[m + n];
        while(i < m && j < n){
            if(nums1[i] <= nums2[j]){
                res[k++] = nums1[i++];
            }
            else{
                res[k++] = nums2[j++];
            }
        }

        while(i < m){
            res[k++] = nums1[i++];
        }

        while (j < n) {
            res[k++] = nums2[j++];
        }

        return res;
        
    }
    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        int m = 3;
        int[] nums2 = {2,5,6}; 
        int n = 3;

        int[] res1 = merge(nums1, m, nums2, n);
        for(int i = 0 ; i < nums1.length ; i++){
            System.out.println(" "+res1[i]);
        }
    }
}