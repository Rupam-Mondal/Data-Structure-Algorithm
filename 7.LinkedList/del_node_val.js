var removeElements = function (head, val) {
    let newNode = new ListNode(0);
    newNode.next = head;
    let temp = newNode;
    while (temp != null && temp.next != null) {
        if (temp.next.val == val) {
            temp.next = temp.next.next;
        }
        else {
            temp = temp.next;
        }
    }
    return newNode.next;
};