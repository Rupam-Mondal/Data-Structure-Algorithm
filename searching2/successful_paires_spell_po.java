import java.util.*;
public class successful_paires_spell_po {
    public static int checkSuccess(int ele, int[] potions, long success) {
        int left = 0;
        int right = potions.length - 1;
        int res = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            long successChecker = potions[mid] * ele;
            if (successChecker < success) {
                left = mid + 1;
            } else if (successChecker >= success) {
                res = mid;
                right = mid - 1;
            }
        }
        if (res == -1)
            return 0;
        return potions.length - res;
    }

    public static int[] successfulPairs(int[] spells, int[] potions, long success) {
        Arrays.sort(potions);
        int[] arr = new int[spells.length];
        for (int i = 0; i < spells.length; i++) {
            arr[i] = checkSuccess(spells[i], potions, success);
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] spells = { 5, 1, 3};

        int[] potions = { 1, 2, 3, 4,5 };
        int[] arr = successfulPairs(spells, potions, 7);
        System.out.println(arr.toString());
    }
}