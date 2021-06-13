/**
 * Given a list of points on the 2-D plane and an integer K. 
 * The task is to find K closest points to the origin and print them.
 */
const findClosestPoints = (array, k) => {
    const heap = new MaxHeap(k);
    for(let i = 0; i < array.length; i++) {
        const distance = Math.pow(array[i][0], 2) + Math.pow(array[i][1], 2);
        const heapNode = new HeapNode(array[i], distance);
        heap.insert(heapNode);
        if(heap.size() > k)
            heap.delete();
    }
    heap.display();
}

class HeapNode {
    constructor(coordinates, distance) {
        this.coordinates = coordinates;
        this.distance = distance;
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
        const value = heapNode.distance;
        this.length++;
        let insertIdx = this.length - 1;
        let parentIdx = this.getParentIdx(insertIdx);
        while(insertIdx >= 0 && this.array[parentIdx] && this.array[parentIdx].distance < value) {
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
        if(leftChildIdx >=0 && this.array[maxIdx].distance < this.array[leftChildIdx].distance)
            maxIdx = leftChildIdx;
        if(rightChildIdx >= 0 && this.array[maxIdx].distance < this.array[rightChildIdx].distance)
            maxIdx = rightChildIdx;
        
        if(parentIdx !== maxIdx) {
            [this.array[parentIdx], this.array[maxIdx]] = [this.array[maxIdx], this.array[parentIdx]];
            this.percolateDown(maxIdx);
        }
    }
    size() {
        return this.length;
    }
    display() {
        console.log(this.array.slice(0, this.length));
    }
}

let array = [[3, 3], [5, -1], [-2, 4]], k = 2;
array = [[1, 3], [-2, 2]], k = 1;
findClosestPoints(array, k);