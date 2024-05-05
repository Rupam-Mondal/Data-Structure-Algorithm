function average(arr) {
    let averages = [];
    for (let list of arr) {
        let sum = 0;
        for (let num of list) {
            sum += num;
        }
        averages.push(sum / list.length);
    }
    return averages;
}

function traverse(root, arr, level) {
    if (root === null) return;
    if (arr.length === level) {
        let newList = [];
        newList.push(root.val);
        arr.push(newList);
    } else {
        arr[level].push(root.val);
    }
    traverse(root.left, arr, level + 1);
    traverse(root.right, arr, level + 1);
}

function averageOfLevels(root) {
    let levels = [];
    traverse(root, levels, 0);
    return average(levels);
}
