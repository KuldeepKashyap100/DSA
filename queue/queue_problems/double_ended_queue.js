const Node = function (data, next = null) {
    this.data = data;
    this.next = next;
}

class DoubleEndedQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    pushFront(data) {
        const newNode = new Node(data);
        if(this.front === null) {
            this.front = this.rear = newNode;
            return;
        }
        newNode.next = this.front;
        this.front = newNode;
    }
    pushBack(data) {
        const newNode = new Node(data);
        if(this.front === null) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }
    popFront() {
        if(!this.front) {
            throw new Error("Queue underflow.");
        }
        const data = this.front.data;
        this.front = this.front.next;
        return data;
    }
    popBack() {
        if(!this.rear) {
            throw new Error("Queue underflow");
        }
        let front = this.front;
        while(front.next !== this.rear) front= front.next;
        const data = this.rear.data;
        this.rear = front;
        this.rear.next = null;
        return data;
    }
    display() {
        let front = this.front;
        while(front) {
            console.log(front.data);
            front= front.next;
        }
    }
}

const queue = new DoubleEndedQueue();

queue.pushFront(2);
queue.pushBack(1);
queue.pushBack(3);
queue.pushFront(4);

queue.popFront();
queue.popBack();




queue.display();