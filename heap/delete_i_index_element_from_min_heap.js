const MinHeap = require("./Heap").MinHeap;

const minHeap = new MinHeap();
minHeap.array = [ 1, 5, 14, 2, 10, 21, 18, 3, 11, 28, 37, 42 ];
minHeap.count = minHeap.array.length;

// time -> o(logn)
const deleteItemOnIndex = (minHeap, index) => {
    const data = minHeap.array[index];
    minHeap.array[index] = minHeap.array[minHeap.count - 1];
    minHeap.count--;
    minHeap.array.pop();
    minHeap.percolateDown(index);
    return data;
}

deleteItemOnIndex(minHeap, 1);

console.log(minHeap.array);