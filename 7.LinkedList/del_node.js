var deleteNode = function(node) {
    let temp;
    temp = node.val;
    node.val = node.next.val;
    node.next.val = temp;

    node.next = node.next.next;
};