class Stack{
    #arr;

    constructor(){
        this.#arr = [];
    }

    push(element){
        this.#arr.push(element);
    }
    pop(){
        this.#arr.pop();
    }
    top(){
        return this.#arr[this.#arr.length - 1];
    }
}

let s = new Stack();
s.push(10);
console.log(s.top());