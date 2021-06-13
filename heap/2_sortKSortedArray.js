/**
 * Given an array of n elements, where each element is at most 
 * k away from its target position, 
 * devise an algorithm that sorts in O(n log k) time.
 */

// time -> O(nlogk) | space -> O(k) if have used sorting then time -> O(logn)
const sortKSortedArray = (array, k) => {
    const heap = new MinHeap(k);
    for(let i = 0; i <= k; i++) {
        heap.insert(array[i]);
    }
    heap.display();
    for(let i = 0; i < array.length; i++) {
        const minValue = heap.delete();
        array[i] = minValue;
        if(k + i + 1 < array.length) {
            heap.insert(array[k + i + 1]);
        }
    }
    console.log(array);
}

class MinHeap {
    constructor(size) {
        this.array = new Array(size);
        this.length = 0;
    }
    getParentIdx(childIdx) {
        if(childIdx <= 0 || childIdx >= this.length) return -1;
        return Math.floor((childIdx - 1) / 2);
    }

    getLeftChildIdx(parentIdx) {
        const childIdx = 2 * parentIdx + 1;
        if(childIdx >= this.length) return -1;
        return childIdx;
    }
    getRightChildIdx(parentIdx) {
        const childIdx = 2*parentIdx + 2;
        if(childIdx >= this.length) return -1;
        return childIdx;
    }
    insert(value) {
        this.length++;
        let insertIndex = this.length - 1;
        let parentIdx = this.getParentIdx(insertIndex);
        while(insertIndex >= 0 && this.array[parentIdx] > value) {
            this.array[insertIndex] = this.array[parentIdx];
            insertIndex = parentIdx;
            parentIdx = this.getParentIdx(insertIndex);
        }
        this.array[insertIndex] = value;
    }
    delete() {
        const deleteElement = this.array[0];
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.percolateDown(0);
        return deleteElement;
    }
    percolateDown(parentIdx) {
        const leftChildIdx = this.getLeftChildIdx(parentIdx);
        const rightChildIdx = this.getRightChildIdx(parentIdx);

        let minIdx = parentIdx;
        if(this.array[minIdx] > this.array[leftChildIdx]) 
            minIdx = leftChildIdx;
        if(this.array[minIdx] > this.array[rightChildIdx])
            minIdx = rightChildIdx;
        
        if(minIdx !== parentIdx) {
            [this.array[minIdx], this.array[parentIdx]] = [this.array[parentIdx], this.array[minIdx]];
            this.percolateDown(minIdx);
        }
    }
    display() {
        console.log(this.array.slice(0, this.length));
    }

}
let array = [6, 5, 3, 2, 8, 10, 9], k = 3;
sortKSortedArray(array, k);