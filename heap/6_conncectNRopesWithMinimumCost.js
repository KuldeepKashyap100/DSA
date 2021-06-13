/**
 * There are given n ropes of different lengths, we need to connect these ropes into one rope. 
 * The cost to connect two ropes is equal to the sum of their lengths.
 *  We need to connect the ropes with minimum cost.
 * For example, if we are given 4 ropes of lengths 4, 3, 2, and 6. 
 * We can connect the ropes in the following ways. 
 * 1) First, connect ropes of lengths 2 and 3. Now we have three ropes of lengths 4, 6, and 5. 
 * 2) Now connect ropes of lengths 4 and 5. Now we have two ropes of lengths 6 and 9. 
 * 3) Finally connect the two ropes and all ropes have connected.
 * Total cost for connecting all ropes is 5 + 9 + 15 = 29. 
 */
const connectNRopes = (array) => {
    const minHeap = new MinHeap(array.length);
    for(let i = 0; i < array.length; i++) {
        minHeap.insert(array[i]);
    }

    let cost = 0;
    while(minHeap.size() > 1) {
        const firstRope = minHeap.delete() ;
        const secondRope = minHeap.delete();
        cost = cost + firstRope + secondRope;
        minHeap.insert(firstRope + secondRope);
    }
    console.log(cost);
}

class MinHeap {
    constructor(size) {
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
    insert(value) {
        this.length++;
        let insertIdx = this.length - 1;
        let parentIdx = this.getParentIdx(insertIdx);
        while(insertIdx >= 0 && this.array[parentIdx] > value) {
            this.array[insertIdx] = this.array[parentIdx];
            insertIdx = parentIdx;
            parentIdx = this.getParentIdx(insertIdx);
        }
        this.array[insertIdx] = value;
    }
    display() {
        console.log(this.array.slice(0, this.length));
    }
    size() {
        return this.length;
    }
    delete() {
        const elementDeleted = this.array[0];
        this.array[0] = this.array[this.length - 1];
        this.length--;
        this.percolateDown(0);
        return elementDeleted;
    }
    percolateDown(parentIdx) {
        const leftChildIdx = this.getLeftChildIdx(parentIdx);
        const rightChildIdx = this.getRightChildIdx(parentIdx);

        let minIdx = parentIdx;
        if(this.array[leftChildIdx] < this.array[minIdx])
            minIdx = leftChildIdx;
        if(this.array[rightChildIdx] < this.array[minIdx])
            minIdx = rightChildIdx;
        if(parentIdx !== minIdx) {
            [this.array[parentIdx], this.array[minIdx]] = [this.array[minIdx], this.array[parentIdx]];
            this.percolateDown(minIdx);
        }
    }
}

let ropes = [4, 3, 2, 6];
connectNRopes(ropes);