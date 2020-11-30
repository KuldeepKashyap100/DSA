// time -> o(n/2)
const findMaxElementInMinHeap = (minHeap) => {
    // compare only leaf nodes i.e n/2
    const lastNodeIndex = minHeap.length - 1;
    const lastNodeParentIndex = (lastNodeIndex - 1)/2;
    const firstLeafNodeIndex = lastNodeParentIndex + 1;
    let max = -Infinity;
    for(let i = firstLeafNodeIndex; i <= minHeap.length - 1; i++) {
        max = minHeap[i] > max ? minHeap[i] : max
    }
    return max;
}

console.log(findMaxElementInMinHeap([1, 5, 14, 2, 10, 21, 18, 3, 11, 28, 37, 42]));