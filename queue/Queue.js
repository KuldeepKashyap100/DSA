const LinkedList = require('../linked_list/LinkedList');

class CircularQueue {
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.array = [];
    }

    isEmpty() {
        return this.front === -1;
    }
    isFull() {
        return (this.rear+1) % this.capacity === this.front;
    }
    size() {
        return (this.rear - this.front + this.capacity + 1) % this.capacity;
    }
    enqueue(data) {
        if(this.isFull()) {
            throw new Error("Queue overflow");
        }
        this.rear = ++this.rear % this.capacity;
        this.array[this.rear] = data;
        if(this.front === -1)
            this.front = this.rear;
    }
    dequeue() {
        if(this.isEmpty()) {
            throw new Error("Queue underflow");
        }
        let data = this.array[this.front];
        if(this.front === this.rear)
            this.front = this.rear = -1;
        else 
            this.front = ++this.front % this.capacity;
        return data;
    }
    display() {
        let i = this.front;
        while( i % this.capacity != this.rear ) {
            console.log(this.array[i]);
            i = (i + 1) % this.capacity;
        }
        console.log(this.array[i]);
    }
}

// const circularQueue = new CircularQueue();
// circularQueue.enqueue(1);
// circularQueue.enqueue(2);
// circularQueue.enqueue(3);
// circularQueue.enqueue(4);
// circularQueue.enqueue(5);



// console.log(circularQueue.dequeue() + "\n");
// circularQueue.enqueue(6);
// console.log(circularQueue.dequeue()+ "\n");

// circularQueue.enqueue(7);

// console.log(circularQueue.dequeue()+ "\n");
// console.log(circularQueue.dequeue())+ "\n";

// circularQueue.enqueue(8);



// circularQueue.display();

// console.log(circularQueue.front, circularQueue.rear, circularQueue.size());


class DynamicCircularQueue {
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.array = new Array(capacity);
    }
    isEmpty() {
        return this.front === -1;
    }
    isFull() {
        return (this.rear+1) % this.capacity === this.front;
    }
    size() {
        return (this.rear - this.front + this.capacity + 1) % this.capacity;
    }
    display() {
        let i = this.front;
        while( i % this.capacity != this.rear ) {
            console.log(this.array[i]);
            i = (i + 1) % this.capacity;
        }
        console.log(this.array[i]);
    }
    resize() {
        const newCapacity = 2 * this.capacity;
        // const newArray = new Array(newCapacity).fill().map((_,i)=>this.array[i]);
        const newArray = new Array(newCapacity);
        let i = this.front;
        while( i % this.capacity != this.rear ) {
            newArray[i] = this.array[i];
            i = (i + 1) % this.capacity;
        }
        newArray[i] = this.array[i];
        this.array = newArray;
        this.capacity = newCapacity;
    }
    enqueue(data) {
        if(this.isFull()) {
            this.resize();
        }
        this.array[++this.rear % this.capacity] = data;
        if(this.front === -1)
            this.front = this.rear;
    }
    dequeue() {
        if(this.isEmpty())
            throw new Error("Queue underflow.");
        const data = this.array[this.front];

        if(this.front === this.rear) 
            this.front = this.rear = -1;
        else
            this.front = ++this.front % this.capacity;
        return data; 
    }
}

// const dynamicCircularQueue = new DynamicCircularQueue();
// dynamicCircularQueue.enqueue(1);
// dynamicCircularQueue.enqueue(2);
// dynamicCircularQueue.enqueue(3);
// dynamicCircularQueue.enqueue(4);
// dynamicCircularQueue.enqueue(5);
// dynamicCircularQueue.enqueue(6);



// console.log(dynamicCircularQueue.dequeue() + "\n");
// dynamicCircularQueue.enqueue(6);
// console.log(dynamicCircularQueue.dequeue()+ "\n");

// dynamicCircularQueue.enqueue(7);

// console.log(dynamicCircularQueue.dequeue()+ "\n");
// console.log(dynamicCircularQueue.dequeue())+ "\n";

// dynamicCircularQueue.enqueue(8);



// dynamicCircularQueue.display();


class LinkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }
    enqueue(data) {
        this.list.insert(data);
    }
    dequeue() {
        return this.list.delete(this.size());
    }
    isEmpty() {
        return this.list.head ===null;
    }
    size() {
        let head = this.list.head;
        let count = 0;
        while(head!=null) {
            count++;
            head = head.next;
        }
        return count;
    }
    display() {
        this.list.display();
    }
}

// const linkedListQueue = new LinkedListQueue();
// linkedListQueue.enqueue(1);
// linkedListQueue.enqueue(2);
// linkedListQueue.enqueue(3);
// linkedListQueue.enqueue(4);
// linkedListQueue.enqueue(5);
// linkedListQueue.enqueue(6);



// console.log(linkedListQueue.dequeue() + "\n");
// linkedListQueue.enqueue(6);
// console.log(linkedListQueue.dequeue()+ "\n");

// linkedListQueue.enqueue(7);

// console.log(linkedListQueue.dequeue()+ "\n");
// console.log(linkedListQueue.dequeue())+ "\n";

// linkedListQueue.enqueue(8);



// linkedListQueue.display();