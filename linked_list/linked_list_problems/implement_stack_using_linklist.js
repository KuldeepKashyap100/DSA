// implement link list

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    push(data) {
        const newNode = new Node(data);
        if(this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    pop() {
        let head = this.head;
        if(head.next === null) {
            this.head = null;
            return head;
        }
        while(head.next !== this.tail) {
            head = head.next;
        }
        const poppedNode = head.next;
        head.next = null;
        return poppedNode;
    }
    display() {
        let head = this.head;
        while(head!=null) {
            console.log(head.data);
            head = head.next;
        }
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);


stack.pop();

stack.display();