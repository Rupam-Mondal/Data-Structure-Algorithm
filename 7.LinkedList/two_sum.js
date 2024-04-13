var addTwoNumbers = function(l1, l2) {
    let temp1 = l1;
    let temp2 = l2;
    let carry = 0;
    let node = new ListNode(-1);
    let t1 = node;

    while(temp1 != null || temp2 != null || carry == 1){
        let num1 = 0;
        let num2 = 0;
        if(temp1 != null){
            num1 = temp1.val;
            temp1 = temp1.next;
        }

        if(temp2 != null){
            num2 = temp2.val;
            temp2 = temp2.next;
        }
        let ans = num1 + num2 + carry;

        let newNode = new ListNode(ans % 10 , null);
        carry = Math.floor(ans / 10);
        t1.next = newNode;
        t1 = t1.next;
    }

    return node.next;
};