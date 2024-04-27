class Node {
    int data;
    Node next;
    Node prev;

    public Node(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class Linkedlist{
    Node head;
    Node tail;
    Linkedlist(){
        this.head = null;
        this.tail = null;
    }

    void addHead(int val){
        Node newNode = new Node(val);
        if(head == null){
            head = newNode;
            tail = newNode;
        }
        else{
            newNode.next = head;
            head.prev = newNode;
            head = newNode;
        }
    }
    void removeaddhead(){
        if(head == null){
            return;
        }
        else if(head.next == null){
            head = null;
            tail = null;
        }
        else{
            Node newhead = head.next;
            head.next = null;
            newhead.prev = null;
            head = newhead;
        }
    }
    void addtail(int val){
        if(head == null){
            this.addHead(val);
        }
        else{
            Node newNode = new Node(val);
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }
    void removetail(){
        if(head == null) return;
        else if(head.next == null){
            head = null;
            tail = null;
        }
        else{
            Node newtail = tail.prev;
            newtail.next = null;
            tail.prev = null;
            tail = newtail;
        }
    }
}