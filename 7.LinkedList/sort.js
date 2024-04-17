var insertionSortList = function (head) {
    let i = head;
    while (i.next != null) {
        let j = i.next;
        while (j != null) {
            if (i.val > j.val) {
                let temp = i.val;
                i.val = j.val;
                j.val = temp;
            }
            j = j.next;
        }
        i = i.next;
    }
    return head;
};