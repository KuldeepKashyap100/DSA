class MaxHeap { 
    constructor(array = []) {
        this.array = array;
        this.length = this.array.length;
        // this.capacity = capacity;
    }
    getParentIdx(childIndex) {
        if(childIndex <= 0 || childIndex >= this.length)
            return -1;
        return Math.floor((childIndex-1)/2);
    }
    getLeftChildIdx(parentIndex) {
        const leftChildIndex = Math.floor(2*parentIndex + 1);
        if(leftChildIndex >= this.length)
            return -1;
        return leftChildIndex;
    }
    getRightChildIdx(parentIndex) {
        const rightChildIndex = Math.floor(2*parentIndex + 2);
        if(rightChildIndex >= this.length)
            return -1;
        return rightChildIndex;
    }
    getMaximumElement() {
        return this.array[0] || null;
    }
    // o(logn)
    percolateDown(index) {
        const leftChild = this.getLeftChildIdx(index);
        const rightChild = this.getRightChildIdx(index);
        
        // find max children
        let maxIndex = index;
        if(leftChild && this.array[maxIndex] < this.array[leftChild]) 
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
        this.length++;
        let insertedIndex = this.length - 1;
        // find appropriate location
        while(insertedIndex >= 0 && this.array[this.Idx(insertedIndex)] < data) {
            this.array[insertedIndex] = this.array[this.getParentIdx(insertedIndex)];
            insertedIndex = this.getParentIdx(insertedIndex);
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
    // time -> O(n) surprising
    /**
     * https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity
     * 
     * two options Available siftdown and siftup
     * Which implementation for buildHeap is more efficient?
     * Both of these solutions will produce a valid heap. Unsurprisingly, the more efficient one is the second operation that uses siftDown.
     * 
     * Let h = log n represent the height of the heap. 
     * The work required for the siftDown approach is given by the sum
     * (0 * n/2) + (1 * n/4) + (2 * n/8) + ... + (h * 1).
     * 
     * Each term in the sum has the maximum distance a node at the given height will have to move (zero for the bottom layer, h for the root) multiplied by the number of nodes at that height. 
     * In contrast, the sum for calling siftUp on each node is
     * (h * n/2) + ((h-1) * n/4) + ((h-2)*n/8) + ... + (0 * 1).
     * 
     * It should be clear that the second sum is larger. 
     * The first term alone is hn/2 = 1/2 n log n,
     * so this approach has complexity at best O(n log n).
     * 
     * 
     * another explaination -
     * Intuitively:
     * "The complexity should be O(nLog n)... for each item we "heapify", 
     * it has the potential to have to filter down 
     * once for each level for the heap so far (which is log n levels)."
     * 
     * Not quite. 
     * Your logic does not produce a tight bound -- 
     * it over estimates the complexity of each heapify. 
     * If built from the bottom up, insertion (heapify) 
     * can be much less than O(log(n)). The process is as follows:
     * ( Step 1 ) The first n/2 elements go on the bottom row of the heap. 
     *              h=0, so heapify is not needed.
     * ( Step 2 ) The next n/22 elements go on the row 1 up from the bottom. h=1, 
     *              heapify filters 1 level down.
     * ( Step i ) The next n/2i elements go in row i up from the bottom.
     *              h=i, heapify filters i levels down.
     * ( Step log(n) ) The last n/2log2(n) = 1 element goes in row log(n) up from the bottom. 
     *              h=log(n), heapify filters log(n) levels down.
     * NOTICE: that after step one, 1/2 of the elements (n/2) are already in the heap, 
     * and we didn't even need to call heapify once. 
     * Also, notice that only a single element, 
     * the root, actually incurs the full log(n) complexity.
     */
    buildHeap() {
        const lastElementParentIndex = this.getParentIdx(this.length - 1);
        // start with the parent of last element we can ignore all the leaf nodes
        for(let i = lastElementParentIndex; i>=0; i--)
            this.percolateDown(i);

        return this.array;
    }

    // time -> o(nlogn) why
    /**
     * Why does heap sort require O(n log n) time?
     * If it is possible to run buildHeap in linear time, 
     * why does heap sort require O(n log n) time? 
     * Well, heap sort consists of two stages. First, 
     * we call buildHeap on the array, which requires O(n) time if implemented optimally. 
     * 
     * Notice that, in contrast to buildHeap where for most of the nodes 
     * we are calling siftDown from the bottom of the tree, 
     * we are now calling siftDown from the top of the tree 
     * on each iteration! Although the tree is shrinking, 
     * it doesn't shrink fast enough: The height of the tree 
     * stays constant until you have removed the first half of the nodes 
     */
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
    display() {
        console.log(this.array.slice(0, this.length));
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
