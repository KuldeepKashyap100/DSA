class Node {
    constructor(data, next = this){
        this.data = data;
        this.next = this;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.totalElements = 0;
    }
    insert(data, position = this.totalElements + 1) {
        const newNode = new Node(data);
        this.totalElements++;

        if(this.head === null) {
            this.head = newNode;
            return;
        } 

        let tail = this.head;
        if(position === 1) {
            while (tail.next != this.head)
                tail = tail.next;
            newNode.next = this.head;
            tail.next = newNode;
            this.head = newNode;
            return;
        }

        let count = 1;
        while(tail.next != this.head && count < position-1) {
            tail = tail.next;
            count++;
        }
        if(count !== position-1) {
            throw new Error("Position does not exists.");
        }
        newNode.next = tail.next;
        tail.next = newNode;
    }
    delete(position = this.totalElements) {
        let tail = this.head;
        if(tail.next === this.head) {
            this.head = null;
            return;
        }

        if(position === 1) {
            while(tail.next != this.head)
                tail = tail.next;
            this.head = this.head.next;
            tail.next = this.head;
            return;
        }
        let count = 1, prevNode;
        while(tail.next != this.head && count < position-1) {
            count++;
            prevNode = tail;
            tail = tail.next;
        }
        // if(count !== position-1) {
        //     throw new Error("Position does not exists.");
        // }
        if(tail.next === this.head)
            prevNode.next = this.head;
        else
            tail.next = tail.next.next;
    }
    display() {
        if(!this.head) return;
        let head = this.head;
        do {
            console.log(head.data);
            head = head.next;
        } while(head != this.head)
    }
}

// let list = new CircularLinkedList();

// list.insert(1);
// list.insert(2, 2);
// list.insert(3, 3);
// list.insert(4, 4);
// list.insert(5, 5);

// list.insert(6, 6);

// list.delete(7);

// list.display();


module.exports = CircularLinkedList;