function firstUniqChar(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        } else {
            map.set(s.charAt(i), 1);
        }
    }
    let target = '';
    for (let i = 0; i < s.length; i++) {
        if (map.get(s.charAt(i)) === 1) {
            target = s.charAt(i);
            break;
        }
    }
    let index = s.indexOf(target);
    return index;
}
