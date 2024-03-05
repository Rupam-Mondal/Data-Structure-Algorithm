/**
 * Bubble sort can not be used for heavy swaped mechanism
 * it uses so many swaping
 * 
 * bubble sort is capable of k th largest element but this method is not so much good but it is
 * a use case
*/

function bubble_sort(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        let isSwap = false;
        for(let j = 0 ; j < arr.length - i - 1 ; j++){ // n - i - 1 because in every iteration we push
                                                        //the max value at the end of the array
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwap = true;
            }
        }
        if(isSwap == false) return;
    }
}

const arr = [3 , 2 , 8 , 1 , 11];
bubble_sort(arr);
console.log(arr);