/**
 * bubble sort using a loop
*/

function bubble(arr , idx) {
    if(idx == arr.length - 1){
        return;
    }
    for(let i = 0 ; i < arr.length - 1 ; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    bubble(arr ,idx + 1);

}
const arr = [4 , 3 , 10 , 11 , 8];
bubble(arr , 0);
console.log(arr);