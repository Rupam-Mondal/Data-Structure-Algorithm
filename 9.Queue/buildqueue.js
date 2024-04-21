class node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class queue{
    constructor(){
        this.front = null;
        this.last = null;
    }

    dequeue(){
        if(this.front == null) return;
        this.front = this.front.next;
    }

    enqueue(val){
        const newNode = new node(val);
        if(this.head == null){
            this.front = node;
            this.last = node;
            return;
        }

        this.last.next = newNode;
        this.last = newNode;
    }
}