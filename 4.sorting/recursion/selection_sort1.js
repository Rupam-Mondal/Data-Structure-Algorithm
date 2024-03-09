function selection(arr , idx) {
    if(idx == arr.length - 1){
        return;
    }
    let min = idx;
    for(let i = idx + 1 ; i < arr.length ; i++){
        if(arr[i] < arr[min]){
            min = i;
        }
    }
    if(min != idx){
        let temp = arr[min];
        arr[min] = arr[idx];
        arr[idx] = temp;
    }


    selection(arr , idx + 1);
}

const arr = [4, 3, 10, 11, 8];
selection(arr, 0);
console.log(arr);