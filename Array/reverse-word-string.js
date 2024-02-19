var reverseWords = function (s) {
    const arr = [];
    const p = s.trim();
    let s1 = "";
    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) != " ") {
            s1 = s1 + p.charAt(i);
        }
        else {
            arr.push(s1);
            s1 = "";
            continue;
        }
    }
    return arr;
};

console.log(reverseWords("Hi bro"));