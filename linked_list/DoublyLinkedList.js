class Node {
    constructor(data, prev = null, next =null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.totalElements = 0;
    }
    insert(data, position = this.totalElements + 1) {
        const newNode = new Node(data);
        this.totalElements++;
        if(position === 1) {
            newNode.next = this.head;
            if(this.head)
                this.head.prev = newNode;
            this.head = newNode;
            return;
        }
        let count = 1, head = this.head;
        while(head.next!=null && count<position-1) {
            count++;
            head = head.next;
        }
        if(count!=position-1) {
            throw new Error("Desired position does not exists");
        }
        newNode.prev = head;
        newNode.next = head.next;
        if(head.next)
            head.next.prev = newNode;
        head.next = newNode;
    }
    delete(position = this.totalElements) {
        if(position === 1) {
            this.head = this.head.next;
            return;
        }
        let head = this.head, count = 1; 
        while(head.next!=null && count < position) {
            head = head.next;
            count++;
        }
        if(count!=position) {
            throw new Error("Desired position does not exists");
        }
        head.prev.next = head.next;
        if(head.next)
            head.next.prev = head.prev;
    }
    display() {
        let head = this.head;
        while(head!=null) {
            console.log(head.data);
            head = head.next;
        }
    }
}

let list = new DoublyLinkedList();


list.insert(1);
list.insert(2, 2);
list.insert(3, 3);
list.insert(4, 4);
list.insert(5, 5);

// list.insert(6, 6);

list.delete(6);


list.display();

module.exports = DoublyLinkedList;