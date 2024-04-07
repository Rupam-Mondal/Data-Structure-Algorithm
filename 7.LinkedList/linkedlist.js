var Node = function (data) {
    this.data = data;
    this.next = null;
}


var MyLinkedList = function () {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let i = 0;
    let temp = this.head;
    while (i < index && temp != null) {
        i++;
        temp = temp.next;
    }
    if (temp == null) -1;
    return temp.data;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    if (this.head == null) {
        this.head = new Node(val);
    } else {
        let n = new Node(val);
        n.next = this.head;
        this.head = n;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (this.head == null) {
        this.head = new Node(val);
    } else {
        let temp = this.head;
        while (temp.next != null) {
            temp = temp.next;
        }
        let n = new Node(val);
        temp.next = n;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0) {
        return;
    }
    const newNode = new Node(val);
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    let current = this.head;
    for (let i = 0; current != null && i < index - 1; i++) {
        current = current.next;
    }

    if (current === null) {
        return;
    }

    newNode.next = current.next;
    current.next = newNode;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || this.head === null) {
        return;
    }
    if (index === 0) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next !== null) {
        current = current.next;
        i++;
    }
    if (current.next === null) {
        return;
    }
    current.next = current.next.next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */