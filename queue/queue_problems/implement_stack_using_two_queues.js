class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    push(data) {
        if(!this.queue1.length) 
            this.queue2.push(data);
        else 
            this.queue1.push(data);
    }
    pop() {
        if(this.queue2.length) {
            while(this.queue2.length !== 1) {
                this.queue1.push(this.queue2.shift());
            }
            return this.queue2.shift();
        }
        else {
            while(this.queue1.length !== 1) {
                this.queue2.push(this.queue1.shift());
            }
            return this.queue1.shift();
        }
    }
    display() {
        console.log(this.queue1, this.queue2);
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);



console.log(stack.pop() + "\n");
stack.push(7);
console.log(stack.pop()+ "\n");

stack.push(8);

console.log(stack.pop()+ "\n");
console.log(stack.pop())+ "\n";

stack.push(9);

console.log(stack.pop()+ "\n");
console.log(stack.pop())+ "\n";


stack.display();