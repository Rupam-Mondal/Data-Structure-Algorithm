var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let t = s[left];
        s[left] = s[right];
        s[right] = t;
        left++;
        right--;
    }
    return s;

    // for(let i = 0 ; i < s.length/2 ; i++){
    //     let temp = s[i];
    //     s[i] = s[s.length - i - 1];
    //     s[s.length - i - 1] = temp;
    // }
    // return s;
};