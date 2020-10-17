const LinkedList = require("../linked_list/LinkedList");

// simple array implementation
class Stack {
  constructor(capacity = 1) {
    this.capacity = capacity;
    this.top = -1;
    this.array = [];
  }

  isEmpty() {
    return this.top === -1;
  }
  isFull() {
    return this.top === this.capacity - 1;
  }
  push(data) {
    if (this.isFull()) throw new Error("Stack Overflow");
    this.array[++this.top] = data;
  }
  pop() {
    if (this.isEmpty()) throw new Error("Stack underflow");
    return this.array[this.top--];
  }
  deleteStack() {
    this.array = [];
  }
  display() {
    let top = this.top;
    while (top >= 0) {
      console.log(this.array[top]);
      top--;
    }
  }
}

class DynamicStack {
  constructor(capacity = 1) {
    this.top = -1;
    this.capacity = capacity;
    this.array = [];
  }
  isEmpty() {
    return this.top === -1;
  }
  isFull() {
    return this.top === this.capacity - 1;
  }
  push(data) {
    if (this.isFull()) {
      this.capacity *= 2;
      // create an array and allocate space double of previous array size
      // now copy all the items from previous array to new array
      // change the array reference
    }
    this.array[++this.top] = data;
  }
  pop() {
    if (this.isEmpty()) throw new Error("Stack underflow");
    return this.array[this.top--];
  }
  display() {
    let top = this.top;
    while (top >= 0) {
      console.log(this.array[top]);
      top--;
    }
  }
}

// const stack = new DynamicStack(2);
// console.log(stack.capacity);

// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.capacity);
// stack.display();

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(data) {
    const newNode = new Node(data, this.top);
    this.top = newNode;
    this.size++;
  }
  getTop() {
    if(this.top)
        return this.top.data;
    return -1;
  }
  getSize() {
    return this.size;
  }
  pop() {
    if (!this.top) throw new Error("Stack underflow");
    const top = this.top.data;
    this.top = this.top.next;
    this.size--;
    return top;
  }
  display() {
    let top = this.top;
    while (top) {
      console.log(top.data);
      top = top.next;
    }
  }
}
// const stack = new LinkedListStack();
// stack.push(1);
// // stack.push(2);
// // stack.push(3);
// stack.pop();
// stack.display();


exports.Stack = Stack;
exports.DynamicStack = DynamicStack;
exports.LinkedListStack = LinkedListStack;
