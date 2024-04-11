var detectCycle = function (head) {
    if (head == null) return null
    let slow = head;
    let fast = head;
    if (head.next == null) return null;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) break;
    }
    if (fast === null || fast.next === null) return null;
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};