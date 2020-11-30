
const PriorityQueue = require("./Heap").PriorityQueue;


class Queue {
    constructor() {
        this.pq = new PriorityQueue();
        this.counter = 1;
    }
    enqueue(data) {
        this.pq.enqueue({data: data, priority: this.counter});
        this.counter++;
    }
    dequeue() {
        return this.pq.dequeue();
    }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
