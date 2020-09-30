class Node {
    constructor(data, ptrDiff) {
        this.data = data;
        this.ptrDiff = ptrDiff
    }
}

class MemoryEfficientDoublyLinkedList {
    constructor() {
        this.head = null;
        this.totalElements = 0;
    }
    insert(data, position = this.totalElements + 1) {
        const newNode = new Node(data);
        if(position === 1) {
            newNode.ptrDiff = null ^ this.head;
            this.head = newNode;
        }
        // while()
    }
    display() {
        let head = this.head, prevNode = null, current;
        while(head!=null) {
            console.log(head.data);
            current = head;
            head = head ^ prevNode;
            prevNode = current;
        }
    }
}

let list = new MemoryEfficientDoublyLinkedList();

list.insert(1);
// list.insert(2, 2);
// list.insert(3, 3);
// list.insert(4, 4);
// list.insert(5, 5);

// list.insert(6, 6);

// list.delete(7);

list.display();


module.exports = MemoryEfficientDoublyLinkedList;