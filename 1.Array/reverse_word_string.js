var reverseWords = function (s) {
    const arr = s.trim().split(/\s+/);
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    let s1 = "";
    for (let i = 0; i < arr.length; i++) {
        s1 = s1 + arr[i] + " ";
    }
    return s1.trim();
};