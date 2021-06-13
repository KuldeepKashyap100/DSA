/**
 * Given an array of n numbers and a positive integer k. 
 * The problem is to find k numbers with most occurrences, 
 * i.e., the top k numbers having the maximum frequency.
 */

const findMaxFrequecyNumbers = (array, k) => {
    const frequencyMap = {};
    for(let i = 0; i < array.length; i++) {
        if(!frequencyMap[array[i]]) frequencyMap[array[i]] = 1;
        else frequencyMap[array[i]]++;
    }

    const minHeap = new MinHeap(k);
    
    for(const element in frequencyMap) {
        const heapNode = new HeapNode(element, frequencyMap[element]);
        minHeap.insert(heapNode);
        if(minHeap.size() > k) {
            minHeap.delete();
        }
    }
    minHeap.display();

    const result = [];
    while(minHeap.size()) result.push(minHeap.delete().value);
    console.log(result);
}

class HeapNode {
    constructor(value, frequency) {
        this.value = value;
        this.frequency = frequency;
    }
}

class MinHeap{
    constructor(size) {
        this.array = new Array(size);
        this.length = 0;
    }
    getParentIdx(childIdx) {
        if(childIdx <=0 || childIdx >= this.length) return  -1;
        return Math.floor((childIdx - 1)/2);
    }
    getLeftChildIdx(parentIdx) {
        const childIdx = 2 * parentIdx + 1;
        if(childIdx >= this.length) return -1;
        return childIdx;
    }
    getRightChildIdx(parentIdx) {
        const childIdx = 2 * parentIdx + 2;
        if(childIdx >= this.length) return  -1;
        return childIdx;
    }
    insert(heapNode) {
        const currentItemFrequency = heapNode.frequency;
        this.length++;
        let insertIdx = this.length - 1;
        let parentIdx = this.getParentIdx(insertIdx);
        while(insertIdx >= 0 && parentIdx >=0 && this.array[parentIdx].frequency > currentItemFrequency) {
            this.array[insertIdx] = this.array[parentIdx];
            insertIdx = parentIdx;
            parentIdx = this.getParentIdx(insertIdx);
        }
        this.array[insertIdx] = heapNode;
    }
    delete() {
        const deletedElement = this.array[0];
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.percolateDown(0);
        return deletedElement;
    }
    percolateDown(parentIdx) {
        const leftChildIdx = this.getLeftChildIdx(parentIdx);
        const rightChildIdx = this.getRightChildIdx(parentIdx);

        let minIdx = parentIdx;
        if(leftChildIdx >= 0 && this.array[minIdx] > this.array[leftChildIdx].frequency)
            minIdx = leftChildIdx;
        if(rightChildIdx >= 0 && this.array[minIdx] > this.array[rightChildIdx].frequency)
            minIdx = rightChildIdx;
        if(minIdx !== parentIdx) {
            [this.array[minIdx], this.array[parentIdx]] = [this.array[parentIdx], this.array[minIdx]];
            this.percolateDown(minIdx);
        }
    }
    size() {
        return this.length;
    }
    display() {
        console.log(this.array.slice(0, this.length));
    }
}

let array = [3, 1, 4, 4, 5, 2, 6, 1], k = 2;
findMaxFrequecyNumbers(array, k);