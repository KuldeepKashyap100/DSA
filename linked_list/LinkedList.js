class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.totalElements = 0;
    }
    insert(data, postition = this.totalElements + 1) {
        const newNode = new Node(data);
        this.totalElements++;
        if(postition === 1) {
            newNode.next = this.head;
            return this.head = newNode;
        }
        let head = this.head, count = 1, prevNode;
        while(head!=null && count<postition) {
            prevNode = head;
            head = head.next;
            count++;
        }
        prevNode.next = newNode;
        newNode.next = head;
        return newNode;
    }
    delete(position = this.totalElements) {
        if(position === 1) {
            return this.head =  this.head.next;
        }
        let head = this.head, count = 1, prevNode;
        while(head!=null && count<position) {
            prevNode = head;
            head = head.next;
            count++;
        }
        if(head) {
            prevNode.next = head.next;
            return head.data;
        }
        else 
            console.log("Position does not exists.");
    }
    // iterative version
    reverse() {
        let current = this.head;
        let prev = null;
        let next;

        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    
    display() {
        let head = this.head;
        while(head!=null) {
            console.log(head.data);
            head = head.next;
        }
    }
}

let list = new LinkedList();

// list.insert(1);
// list.insert(2, 2);
// list.insert(3, 3);
// list.insert(4, 4);
// list.insert(5, 5);

// list.insert(6);

// // list.delete(7);

// list.reverse();

// list.display();

module.exports = LinkedList;