var reverseList = function (head) {
    let curr = head;
    let prev = null;
    let nextPtr = null;
    while (curr != null) {
        nextPtr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextPtr;
    }
    head = prev;
    return head;
};