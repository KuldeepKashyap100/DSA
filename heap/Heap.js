class MaxHeap { 
    constructor(array = []) {
        this.array = array;
        this.length = this.array.length;
        // this.capacity = capacity;
    }
    getParent(childIndex) {
        if(childIndex <= 0 || childIndex >= this.length)
            return null;
        return Math.floor((childIndex-1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChildIndex = Math.floor(2*parentIndex + 1);
        if(leftChildIndex >= this.length)
            return null;
        return leftChildIndex;
    }
    getRightChild(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.length)
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
        
        // find max children
        let maxIndex = index;
        if(leftChild && this.array[index] < this.array[leftChild]) 
            maxIndex = leftChild;

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
        if(this.length === 0)
            return null;
        // store max element
        const dataToBeDeleted = this.array[0];
        // copy last element to first max element
        this.array[0] = this.array[this.length - 1];
        this.array.pop();
        this.length--;
        // percolate that element down the tree;
        this.percolateDown(0);
        return dataToBeDeleted;
    }
    // percolate up
    insert(data) {
        // increase heap size
        this.length++
        let insertedIndex = this.length - 1;
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
        this.length = 0;
    }
    buildHeap() {
        const lastElementParentIndex = this.getParent(this.length - 1);
        // start with the parent of last element we can ignore all the leaf nodes
        for(let i = lastElementParentIndex; i>=0; i--)
            this.percolateDown(i);

        return this.array;
    }

    // time -> o(nlogn)
    heapSort() {
        this.buildHeap();
        // we are going to exclue greatest element as the go to back of the array by decrementing the length
        const storedlength = this.length;
        for(let i = this.length - 1; i>0; i--) {
            // exchange last and first element because first it is the greatest element and we are sorting
            [this.array[0], this.array[i]] = [this.array[i], this.array[0]];
            this.length--;
            this.percolateDown(0);
        }
        this.length = storedlength;
    }
}

class MinHeap {
    constructor() {
        this.array = [];
        this.length = 0;
    }
    getParent(childIndex) {
        if(childIndex <= 0 || childIndex >= this.length)
            return null;
        return Math.floor((childIndex-1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChildIndex = Math.floor(2*parentIndex + 1);
        if(leftChildIndex >= this.length)
            return null;
        return leftChildIndex;
    }
    getRightChild(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.length)
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
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.array.pop();
        this.percolateDown(0);
        return dataToBeDeleted;
    }
    insert(data) {
        this.length++;
        let insertIndex = this.length - 1;
        while(insertIndex >= 0 && this.array[this.getParent(insertIndex)] > data) {
            this.array[insertIndex] = this.array[this.getParent(insertIndex)];
            insertIndex = this.getParent(insertIndex);
        }
        this.array[insertIndex] = data;
    }
    buildHeap() {
        let lastParentIndex = this.getParent(this.length -1);
        for(let i = lastParentIndex; i>= 0; i--) {
            this.percolateDown(i)
        }
        return this.array;
    }

}

const Node = function(data, priority) {
    this.data = data;
    this.priority = priority;
}

class PriorityQueueMax {
    constructor() {
        this.array = [];
        this.length = 0;
    }
    getMaximumElement() {
        return this.array[0] || null;
    }
    getParent(childIndex) {
        if(childIndex <=0 || childIndex >= this.length)
            return -1;
        return Math.floor((childIndex - 1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChildIndex = Math.floor(2 * parentIndex + 1);
        if(leftChildIndex >= this.length)
            return null;
        return leftChildIndex;
    }
    getRightChild(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.length)
            return null;
        return rightChildIndex;
    }
    enqueue(newNode) {
        this.length++;
        let insertIndex = this.length - 1;
        const parentIndex = this.getParent(insertIndex);
        if(parentIndex >= 0) {
            while(insertIndex > 0 && this.array[parentIndex].priority < newNode.priority) {
                this.array[insertIndex] = this.array[this.getParent(insertIndex)];
                insertIndex = this.getParent(insertIndex);
            }
        }
        this.array[insertIndex] = newNode;
    }
    percolateDown(index) {
        const leftChildIndex = this.getLeftChild(index);
        const rightChildIndex = this.getRightChild(index);

        let minPriorityIndex;
        if(leftChildIndex && this.array[index].priority < this.array[leftChildIndex].priority) 
            minPriorityIndex = leftChildIndex;
        else
            minPriorityIndex = index;

        if(rightChildIndex && this.array[minPriorityIndex].priority < this.array[rightChildIndex].priority)
            minPriorityIndex = rightChildIndex;
        
        if(minPriorityIndex !== index) {
            [this.array[minPriorityIndex], this.array[index]] = [this.array[index], this.array[minPriorityIndex]];
            this.percolateDown(minPriorityIndex);
        }
    }
    dequeue() {
        const itemToBeDeleted = this.array[0];
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.array.pop();
        this.percolateDown(0);

        return itemToBeDeleted.data;
    }
    getMax() {
        return this.array[0];
    }
}

class PriorityQueueMin {
    constructor(type = "Min") {
        this.array = [];
        this.length = 0;
    }
    getMaximumElement() {
        return this.array[0] || null;
    }
    getParent(childIndex) {
        if(childIndex <=0 || childIndex >= this.length)
            return -1;
        return Math.floor((childIndex - 1)/2);
    }
    getLeftChild(parentIndex) {
        const leftChildIndex = Math.floor(2 * parentIndex + 1);
        if(leftChildIndex >= this.length)
            return null;
        return leftChildIndex;
    }
    getRightChild(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.length)
            return null;
        return rightChildIndex;
    }
    enqueue(newNode) {
        this.length++;
        let insertIndex = this.length - 1;
        const parentIndex = this.getParent(insertIndex);
        if(parentIndex >= 0) {
            while(insertIndex > 0 && this.array[parentIndex].priority > newNode.priority) {
                this.array[insertIndex] = this.array[this.getParent(insertIndex)];
                insertIndex = this.getParent(insertIndex);
            }
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
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.array.pop();
        this.percolateDown(0);

        return itemToBeDeleted;
    }
}


module.exports = { MaxHeap, MinHeap, PriorityQueueMax, PriorityQueueMin };



/**
 * Heap sort unstable example
 * Consider array 21 20a 20b  12 11 8 7 (already in max-heap format).
 * here 20a = 20b just to differentiate the order we represent them as 20a and 20b.
 * While heapsort first 21 is removed and placed in the last index 
 * then 20a is removed and placed in last but one index and 20b in the last but two index 
 * so after heap sort the array looks like 7 8 11 12 20b 20a 21.
 */
