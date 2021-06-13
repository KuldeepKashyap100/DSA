// n -> total elements in all arrays and k-> number of arrays
// time -> O(nlogk) | space -> O(nlogk)
const mergeKSortedArrays = (sortedArrays, left, right) => {
    if(left === right) return sortedArrays[left];
    const mid = Math.floor((left + right) / 2);
    const firstList = mergeKSortedArrays(sortedArrays, left, mid);
    const secondList = mergeKSortedArrays(sortedArrays, mid + 1, right);
    const sortedList  = mergetTwoSortedLists(firstList, secondList);
    console.log(sortedList);
    return sortedList;

}

const mergetTwoSortedLists = (first, second) => {
    let firstIdx = 0, secondIdx = 0, sortedListIdx = 0, sortedList = [];
    while(firstIdx < first.length || secondIdx < second.length) {
        if(first[firstIdx] < second[secondIdx]) {
            sortedList[sortedListIdx++] = first[firstIdx++];
        }
        else {
            sortedList[sortedListIdx++] = second[secondIdx++];
        }
    }
    if(firstIdx < first.length - 1) sortedList.concat(first);
    else sortedList.concat(second);

    return sortedList;
}

const HeapNode = function(value, arrIdx, elementIdx) {
    this.value = value;
    this.arrIdx = arrIdx;
    this.elementIdx = elementIdx;
}

// time -> O(nlogk) | space -> O(k)
const mergeKSortedArraysUsingHeap = (sortedArrays) => {
    const result = [];
    let resultIdx = 0;

    // create heap of k size and insert first element from each array into heap
    const heap = new Heap(sortedArrays.length);
    for(let i = 0; i < sortedArrays.length; i++) {
        const heapNode = new HeapNode(sortedArrays[i][0], i, 0);
        heap.insert(heapNode);
    }
    
    // delete min from heap and insert it into result
    // and from the same array from which the element is deleted
    // insert new element into heap
    while(heap.length) {
        const minElement = heap.delete();
        result[resultIdx++] = minElement.value;
        if(sortedArrays[minElement.arrIdx].length - 1 > minElement.elementIdx) {
            const element = sortedArrays[minElement.arrIdx][minElement.elementIdx + 1];
            const arrIdx = minElement.arrIdx;
            const elementIdx = minElement.elementIdx + 1;
            const heapNode = new HeapNode(element, arrIdx, elementIdx);
            heap.insert(heapNode);
        }
    }
    console.log(result);

}

class Heap {
    constructor(heapSize) {
        this.arr = new Array(heapSize);
        this.length = 0;
    }
    getParentIdx(childIdx) {
        if(childIdx <= 0 || childIdx >= this.length) return -1;
        return Math.floor((childIdx - 1)/2);
    }
    getLeftChildIdx(parentIdx) {
        const childIdx = parentIdx * 2 + 1;
        if(childIdx > this.length - 1) return -1;
        return childIdx;
    }
    getRightChildIdx(parentIdx) {
        const childIdx = parentIdx * 2 + 2;
        if(parentIdx > this.length - 1) return -1;
        return Math.floor((parentIdx + 2) * 2);
    }
    insert(heapNode) {
        this.length++;
        const currentValue = heapNode.value;
        let insertIdx = this.length - 1;
        let parentIdx = this.getParentIdx(insertIdx);
        while(insertIdx >= 0 && this.arr[parentIdx] && this.arr[parentIdx].value > currentValue) {
            this.arr[insertIdx] = this.arr[parentIdx];
            insertIdx = this.getParentIdx(insertIdx);
            parentIdx = this.getParentIdx(insertIdx);
        }

        this.arr[insertIdx] = heapNode;
    }
    percolateDown(parentIdx) {
        const leftChildIdx = this.getLeftChildIdx(parentIdx);
        const rightChildIdx = this.getRightChildIdx(parentIdx);

        let maxIdx = parentIdx;
        if(this.arr[leftChildIdx] && this.arr[leftChildIdx].value < this.arr[maxIdx].value) 
            maxIdx = leftChildIdx;
        if(this.arr[rightChildIdx] && this.arr[rightChildIdx].value < this.arr[maxIdx].value)
            maxIdx = rightChildIdx;
        
        if(maxIdx !== parentIdx) {
            [this.arr[maxIdx], this.arr[parentIdx]] = [this.arr[parentIdx], this.arr[maxIdx]];
            this.percolateDown(maxIdx);
        }
    }
    delete() {
        const elementDeleted = this.arr[0];
        this.arr[0] = this.arr[this.length - 1];
        this.length--;
        this.percolateDown(0);
        return elementDeleted;
    }
}



const sortedArrays = [  [1, 3, 5, 7], 
                        [2, 4, 6, 8], 
                        [0, 9, 10, 11]] ;

mergeKSortedArrays(sortedArrays, 0, sortedArrays.length - 1);
mergeKSortedArraysUsingHeap(sortedArrays);