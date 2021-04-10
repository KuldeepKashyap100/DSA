class Node {
    constructor(data, next = this) {
        this.data = data;
        this.next = next;
    }
}

class LinkedBlock {
    constructor() {
        this.nodeCount = 0;
        this.head = null;
        this.next = null;
    }
}

class UnrolledLinkedList {
    constructor(blockSize = 4) {
        this.head = null;
        this.totalElements = 0;
        this.blockSize = blockSize;
    }
    searchElement(position) {
        let blockContaingNode = this.head;

        // find the block where target node located
        let targetBlock = Math.floor((position + this.blockSize -1)/this.blockSize);
        while(--targetBlock) {
            blockContaingNode = blockContaingNode.next;
        }

        let targetNode = blockContaingNode.head;
        // Search the position in the block
        position = position % this.blockSize;
        if(position === 0) 
            position = this.blockSize;
        else
            position = this.head.nodeCount + 1 - position;
        while(position--) {
            targetNode = targetNode.next;
        }
        return [blockContaingNode, targetNode];
    }
    shift(targetBlock) {
        let elementToBeShifted;
        while(targetBlock.nodeCount > this.blockSize) {
            // only have one block
            if(targetBlock.next === null) {
                const newBlock = new LinkedBlock();
                targetBlock.next = newBlock;
                elementToBeShifted = targetBlock.head.next;
                targetBlock.head.next = targetBlock.head.next.next;
                newBlock.head = elementToBeShifted;
                elementToBeShifted.next = elementToBeShifted;
                targetBlock.nodeCount--;
                newBlock.nodeCount++;
            }
            else {
                const nextBlock = targetBlock.next;
                elementToBeShifted = targetBlock.head.next;
                targetBlock.head.next = targetBlock.head.next.next;
                elementToBeShifted.next =  nextBlock.head.next;
                nextBlock.head.next = elementToBeShifted;
                nextBlock.head = elementToBeShifted;
                targetBlock.nodeCount--;
                nextBlock.node++;
            }
            targetBlock = nextBlock;
        }
    }
    insert(data, position = this.totalElements + 1) {
        this.totalElements++;
        const newNode = new Node(data);
        if(!this.head) {
            this.head = new LinkedBlock();
            this.head.head = newNode;
            this.head.nodeCount++;
            return;
        }
        if(position === 1) {
            const nextBlock = this.head.next;
            this.head.next = newNode;
            newNode.next = nextBlock;
            this.head.head = newNode;
            this.head.nodeCount++;
            this.shift(this.head);
            return;
        }
        const [searchedBlock, searchedElement] = this.searchElement(position);
        let temp = searchedElement;
        while(temp.next !== searchedElement) 
            temp = temp.next;
        temp.next = newNode;
        newNode.next = searchedElement;
        this.shift(searchedBlock);
    }
    display() {
        let blockHead = this.head;
        while(blockHead) {
            let listHead = blockHead.head;
            do {
                console.log(listHead.data);
                listHead = listHead.next;
            } while(listHead != blockHead.head)
            blockHead = blockHead.next;
        }
    }
}

let list = new UnrolledLinkedList();

list.insert(1);
list.insert(2, 2);
// list.insert(3, 3);
// list.insert(4, 4);
// list.insert(5, 5);

// list.insert(6, 6);

// list.delete(7);

list.display();


module.exports = UnrolledLinkedList;