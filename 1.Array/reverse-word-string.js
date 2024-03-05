var reverseWords = function (s) {
    const arr = [];
    const p = s.trim();
    let s1 = "";
    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) != " ") {
            s1 = s1 + p.charAt(i);
        }
        else {
            if (s1 != "") {
                arr.push(s1);
            }
            s1 = "";
        }
    }
    if (s1 != "") {
        arr.push(s1);
    }
    let s2 = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        s2 = s2 + arr[i] + " ";
    }
    return s2.trim();
};

console.log(reverseWords("I am a good boy"));