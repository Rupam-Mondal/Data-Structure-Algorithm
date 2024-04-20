function buildArray(target, n) {
    const operations = [];
    let index = 0;

    for (let i = 1; i <= n && index < target.length; i++) {
        operations.push("Push");
        if (target[index] !== i) {
            operations.push("Pop");
        } else {
            index++;
        }
    }

    return operations;
}
