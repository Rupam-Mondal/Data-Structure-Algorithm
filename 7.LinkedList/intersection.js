var getIntersectionNode = function (headA, headB) {
    let temp1 = headA;
    let temp2 = headB;
    while (temp1 != temp2) {
        if (temp1 != null) {
            temp1 = temp1.next;
        }
        else {
            temp1 = headB;
        }
        if (temp2 != null) {
            temp2 = temp2.next;
        }
        else {
            temp2 = headA;
        }

    }

    return temp1;
};