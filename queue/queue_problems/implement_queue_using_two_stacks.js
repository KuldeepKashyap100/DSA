class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        // this.front = -1;
        // this.rear = -1;
    }
    enqueue(data) {
        this.stack1.push(data);
        // if(this.front === -1)
        //     this.front = this.rear = 0;
        // else 
        //     this.rear++;
    }

    dequeue() {
        if(!this.stack1.length && !this.stack2.length) {
            throw new Error("Queue underflow.")
        }
        else if(this.stack2.length) {
            return this.stack2.pop();
        }
        else if(this.stack1.length) {
            while(this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    }
    display() {
        console.log(this.stack1, this.stack2);
    }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);



// console.log(queue.dequeue() + "\n");
// queue.enqueue(7);
// console.log(queue.dequeue()+ "\n");

// queue.enqueue(8);

// console.log(queue.dequeue()+ "\n");
// console.log(queue.dequeue())+ "\n";

// queue.enqueue(8);



// queue.display();