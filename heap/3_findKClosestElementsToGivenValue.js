
/**
 * Given a array arr[] and a value X, find the k closest elements to X in arr[]. 
 */

// time -> O(nlogk) | space -> O(k)
const findKClosest = (array, k, x) => {
    const maxHeap = new MaxHeap(k);
    for(let i = 0; i < array.length; i++) {
        const heapNode = new HeapNode(array[i], Math.abs(x - array[i]));
        maxHeap.insert(heapNode);
        if(i >=k) {
            maxHeap.delete();
        }
    }
    const result = [];
    for(let i = 0; i < k; i++) result.push(maxHeap.delete().value);
    console.log(result);
}

class HeapNode {
    constructor(value, diff) {
        this.value = value;
        this.diff = diff;
    }
}

class MaxHeap {
    constructor(size = 0) {
        this.array = new Array(size);
        this.length = 0;
    }
    getParentIdx(childIdx) {
        if(childIdx <=0 || childIdx >= this.length) return -1;
        return Math.floor((childIdx - 1)/2);
    }
    getLeftChildIdx(parentIdx) {
        const childIdx = 2 * parentIdx + 1;
        if(childIdx >= this.length) return -1;
        return childIdx;
    }
    getRightChildIdx(parentIdx) {
        const childIdx = 2 * parentIdx + 2;
        if(childIdx >= this.length) return -1;
        return childIdx;
    }
    insert(heapNode) {
        const value = heapNode.diff;
        this.length++;
        let insertIdx = this.length - 1;
        let parentIdx = this.getParentIdx(insertIdx);
        while(insertIdx >= 0 && this.array[parentIdx] && this.array[parentIdx].diff < value) {
            this.array[insertIdx] = this.array[parentIdx];
            insertIdx = parentIdx;
            parentIdx = this.getParentIdx(insertIdx);
        }
        this.array[insertIdx] = heapNode;
    }
    delete() {
        const heapNode = this.array[0];
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.percolateDown(0);
        return heapNode;
    }
    percolateDown(parentIdx) {
        const leftChildIdx = this.getLeftChildIdx(parentIdx);
        const rightChildIdx = this.getRightChildIdx(parentIdx);

        let maxIdx = parentIdx;
        if(leftChildIdx >=0 && this.array[maxIdx].diff < this.array[leftChildIdx].diff)
            maxIdx = leftChildIdx;
        if(rightChildIdx >= 0 && this.array[maxIdx].diff < this.array[rightChildIdx].diff)
            maxIdx = rightChildIdx;
        
        if(parentIdx !== maxIdx) {
            [this.array[parentIdx], this.array[maxIdx]] = [this.array[maxIdx], this.array[parentIdx]];
            this.percolateDown(maxIdx);
        }
    }
    display() {
        console.log(this.array.slice(0, this.length));
    }
}

let array = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56], x = 35, k = 4;
findKClosest(array, k, x);