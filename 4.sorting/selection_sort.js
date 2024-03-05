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