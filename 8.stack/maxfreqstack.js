function isValid(s) {
    if (s.length === 1) return false;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
            stack.push(s.charAt(i));
            continue;
        }
        if (stack.length === 0) return false;
        const a = stack.pop();
        if (a === '(' && s.charAt(i) !== ')') return false;
        else if (a === '{' && s.charAt(i) !== '}') return false;
        else if (a === '[' && s.charAt(i) !== ']') return false;
    }
    return stack.length === 0;
}
