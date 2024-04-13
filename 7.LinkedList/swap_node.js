var swapNodes = function (head, k) {
    let fast = head;
    let slow = head;
    let temp = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast != null) {
        fast = fast.next;
        slow = slow.next;
    }
    let a = temp.next.val;
    temp.next.val = slow.val;
    slow.val = a;

    return head;
};