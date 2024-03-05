/**
 * in worst case there will be n - 1 swaps and approx n^2 comparisn
 * 
 * for sorting data where writing is a heavy operation ex :- sorting data in hard disk
 * we use selection sort
 * 
 * suppose you have 10 file and you wanna sort wrt data then we have to just do approx n swap
 * so it is not bad in all cases
 */




function selection(arr) {
    for(let i = 0 ; i < arr.length - 1 ; i++){
        let min_index = i;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[min_index] > arr[j]){
                min_index = j;
            }
        }
        if(min_index != i){
            let temp = arr[min_index];
            arr[min_index] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
let arr = [2, 4, 1, 9, 3, 11, 10];
console.log(selection(arr));