function insertion(arr) {
    for(let i = 1 ; i < arr.length ; i++){
        let key = arr[i];
        let j;
        for(j = i - 1 ; j >= 0 ; j--){
            if(arr[j] > key){
                arr[j + 1] = arr[j];
            }
            else{
                break;
            }
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertion([3 , 2 , 1 , 7 , 6]));