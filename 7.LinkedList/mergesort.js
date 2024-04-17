var mergeTwoLists = function (list1, list2) {
    let newlist = new ListNode();
    let temp = newlist;
    let i = list1;
    let j = list2;
    while (i != null && j != null) {
        if (i.val < j.val) {
            let newNode = new ListNode(i.val);
            temp.next = newNode;
            temp = temp.next;
            i = i.next;
        }
        else {
            let newNode = new ListNode(j.val);
            temp.next = newNode;
            temp = temp.next;
            j = j.next;
        }
    }
    while (i != null) {
        let newNode = new ListNode(i.val);
        temp.next = newNode;
        temp = temp.next;
        i = i.next;
    }

    while (j != null) {
        let newNode = new ListNode(j.val);
        temp.next = newNode;
        temp = temp.next;
        j = j.next;
    }
    return newlist.next;

};