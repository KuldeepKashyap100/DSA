class MaxHeap { 
    constructor(type = "max heap", array = [], count = 0) {
        this.array = array;
        this.count = count;
        // this.capacity = capacity;
        this.type = type;
    }
    getParent(childIndex) {
        if(childIndex <= 0 || childIndex >= this.count)
            return null;
        return Math.floor((childIndex-1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChildIndex = Math.floor(2*parentIndex + 1);
        if(leftChildIndex >= this.count)
            return null;
        return leftChildIndex;
    }
    getRightChild(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.count)
            return null;
        return rightChildIndex;
    }
    getMaximumElement() {
        return this.array[0] || null;
    }
    // o(logn)
    percolateDown(index) {
        const leftChild = this.getLeftChild(index);
        const rightChild = this.getRightChild(index);
        let maxIndex;

        // find max children
        if(leftChild && this.array[index] < this.array[leftChild]) 
            maxIndex = leftChild;
        else
            maxIndex = index;
        if(rightChild && this.array[maxIndex] < this.array[rightChild])
            maxIndex = rightChild;
        
        // swap max child with parent
        if(maxIndex != index) {
            [this.array[index], this.array[maxIndex]] = [this.array[maxIndex], this.array[index]];
            // repeat the process down the tree
            this.percolateDown(maxIndex);
        }
    }

    // only max element can be deleted in max heap
    delete() {
        if(this.count === 0)
            return null;
        // store max element
        const dataToBeDeleted = this.array[0];
        // copy last element to first max element
        this.array[0] = this.array[this.count - 1];
        this.array.pop();
        this.count--;
        // percolate that element down the tree;
        this.percolateDown(0);
        return dataToBeDeleted;
    }
    // percolate up
    insert(data) {
        // increase heap size
        this.count++
        let insertedIndex = this.count - 1;
        // find appropriate location
        while(insertedIndex >= 0 && this.array[this.getParent(insertedIndex)] < data) {
            this.array[insertedIndex] = this.array[this.getParent(insertedIndex)];
            insertedIndex = this.getParent(insertedIndex);
        }
        // insert data
        this.array[insertedIndex] = data;
    }
    destroyHeap() {
        while(this.array.length) {
            this.array.pop();
        }
        this.count = 0;
    }
    buildHeap() {
        const lastElementParentIndex = this.getParent(this.count - 1);
        // start with the parent of last element we can ignore all the leaf nodes
        for(let i = lastElementParentIndex; i>=0; i--)
            this.percolateDown(i);

        return this.array;
    }

    // time -> o(nlogn)
    heapSort() {
        this.buildHeap();
        // we are going to exclue greatest element as the go to back of the array by decrementing the count
        const storedCount = this.count;
        for(let i = this.count - 1; i>0; i--) {
            // exchange last and first element because first it is the greatest element and we are sorting
            [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
            this.count--;
            this.percolateDown(0);
        }
        this.count = storedCount;
    }
}

// const maxHeapInstance = new MinHeap();
// maxHeapInstance.insert(17);
// maxHeapInstance.insert(15);
// maxHeapInstance.insert(6);
// maxHeapInstance.insert(1);
// maxHeapInstance.insert(4);
// maxHeapInstance.insert(2);
// maxHeapInstance.insert(5);

// maxHeapInstance.heapSort();

// // maxHeapInstance.delete();



// console.log(maxHeapInstance.array);

class MinHeap {
    constructor() {
        this.array = [];
        this.count = 0;
    }
    getParent(childIndex) {
        if(childIndex <= 0 || childIndex >= this.count)
            return null;
        return Math.floor((childIndex-1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChildIndex = Math.floor(2*parentIndex + 1);
        if(leftChildIndex >= this.count)
            return null;
        return leftChildIndex;
    }
    getRightChild(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.count)
            return null;
        return rightChildIndex;
    }
    getMaximumElement() {
        return this.array[0] || null;
    }
    percolateDown(index) {
        const leftChild = this.getLeftChild(index);
        const rightChild = this.getRightChild(index);
        
        let minIndex;
        if(leftChild && this.array[index] > this.array[leftChild])
            minIndex = leftChild;
        else
            minIndex = index;
        if(rightChild && this.array[minIndex] > this.array[rightChild])
            minIndex = rightChild;
        
        if(minIndex !== index) {
            [this.array[index], this.array[minIndex]] = [this.array[minIndex], this.array[index]];
            this.percolateDown(minIndex);
        }
    }
    delete() {
        const dataToBeDeleted = this.array[0];
        this.array[0] = this.array[this.count - 1];
        this.count--;
        this.array.pop();
        this.percolateDown(0);
        return dataToBeDeleted;
    }
    insert(data) {
        this.count++;
        let insertIndex = this.count - 1;
        while(insertIndex >= 0 && this.array[this.getParent(insertIndex)] > data) {
            this.array[insertIndex] = this.array[this.getParent(insertIndex)];
            insertIndex = this.getParent(insertIndex);
        }
        this.array[insertIndex] = data;
    }
    buildHeap() {
        let lastParentIndex = this.getParent(this.count -1);
        for(let i = lastParentIndex; i>= 0; i--) {
            this.percolateDown(i)
        }
        return this.array;
    }

}

// const maxHeapInstance = new MinHeap();
// maxHeapInstance.insert(17);
// maxHeapInstance.insert(15);
// maxHeapInstance.insert(6);
// maxHeapInstance.insert(1);
// maxHeapInstance.insert(4);
// maxHeapInstance.insert(2);
// maxHeapInstance.insert(5);

// maxHeapInstance.buildHeap();




// console.log(maxHeapInstance.array);


/**
 * Priority Queue
 */

const Node = function(data, priority) {
    this.data = data;
    this.priority = priority;
}

class PriorityQueue {
    constructor(type = "max") {
        this.array = [];
        this.count = 0;
    }
    getMaximumElement() {
        return this.array[0] || null;
    }
    getParent(childIndex) {
        if(childIndex <=0 || childIndex >= this.count)
            return null;
        return Math.floor((childIndex - 1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChildIndex = Math.floor(2 * parentIndex + 1);
        if(leftChildIndex >= this.count)
            return null;
        return leftChildIndex;
    }
    getRightChild(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.count)
            return null;
        return rightChildIndex;
    }
    enqueue(newNode) {
        this.count++;
        let insertIndex = this.count - 1;
        while(insertIndex && this.array[this.getParent(insertIndex)].priority > newNode.priority) {
            this.array[insertIndex] = this.array[this.getParent(insertIndex)];
            insertIndex = this.getParent(insertIndex);
        }
        this.array[insertIndex] = newNode;
    }
    percolateDown(index) {
        const leftChildIndex = this.getLeftChild(index);
        const rightChildIndex = this.getRightChild(index);

        let minPriorityIndex;
        if(leftChildIndex && this.array[index].priority > this.array[leftChildIndex].priority) 
            minPriorityIndex = leftChildIndex;
        else
            minPriorityIndex = index;

        if(rightChildIndex && this.array[minPriorityIndex].priority > this.array[rightChildIndex].priority)
            minPriorityIndex = rightChildIndex;
        
        if(minPriorityIndex !== index) {
            [this.array[minPriorityIndex], this.array[index]] = [this.array[index], this.array[minPriorityIndex]];
            this.percolateDown(minPriorityIndex);
        }
    }
    dequeue() {
        const itemToBeDeleted = this.array[0];
        this.array[0] = this.array[this.count - 1];
        this.count--;
        this.array.pop();
        this.percolateDown(0);

        return itemToBeDeleted;
    }
}

// const pq = new PriorityQueue();
// pq.enqueue(new Node(44, 2));
// pq.enqueue(new Node(44, 1));
// pq.enqueue(new Node(44, 3));
// pq.enqueue(new Node(44, 0));
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());



// console.log(pq.array);



module.exports = { MaxHeap, MinHeap, PriorityQueue };
