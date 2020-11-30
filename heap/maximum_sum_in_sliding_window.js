const AvlTree = require("../tree/binary_search_tree/avl/avl_tree");

/**
 * using avlTree. time -> O(N * Log k) and space -> o(k)
 * Insertion, deletion and search takes log k time in a AVL tree. 
 * So the overall time Complexity is O(N * log k).
 */


const maximumSumInSlidingWindow = (arr, windowSize) => {
    const avlTree = new AvlTree();
    const resultArr = [];
    for(let i=0; i<windowSize; i++) {
        avlTree.insert(arr[i]);
    }
    for(let i = windowSize; i<arr.length; i++) {
        resultArr.push(avlTree.findMax().data);
        avlTree.delete(arr[i - windowSize]);
        avlTree.insert(arr[i]);
    }
    resultArr.push(avlTree.findMax().data);
    return resultArr;
}


/**
 * using deque(dobule ended queue) time -> o(n) and space -> o(k) [k = windowSize]
 * It seems more than O(n) at first look. 
 * It can be observed that every element of array is added and removed at most once. So there are total 2n operations.
 */
const maximumSumInSlidingWindowUsingDequeue = (arr, windowSize) => {
    const doubleEndedQueue = [];
    const resultArr = [];
    for(let i=0; i<windowSize; i++) {
        // Remove all elements smaller than the currently being added element (remove useless elements).
        while(doubleEndedQueue.length && arr[i] >= arr[doubleEndedQueue[doubleEndedQueue.length - 1]])
            doubleEndedQueue.pop();
        doubleEndedQueue.push(i);
    }
    for(let i = windowSize; i<arr.length; i++) {
        resultArr[i - windowSize] = arr[doubleEndedQueue[0]];
        // Remove all elements smaller than the currently being added element (remove useless elements).
        while(doubleEndedQueue.length && arr[i] >= arr[doubleEndedQueue[doubleEndedQueue.length - 1]])
            doubleEndedQueue.pop();
        // Remove the elements which are out of this window. i-windowSize is start index of window.
        while(doubleEndedQueue.length && doubleEndedQueue[0] <= i-windowSize)
            doubleEndedQueue.pop();
        doubleEndedQueue.push(i);
    }
    resultArr[arr.length - windowSize] = doubleEndedQueue[0];
    return resultArr;
}
// const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];

console.log(maximumSumInSlidingWindow(arr, 3));
console.log(maximumSumInSlidingWindowUsingDequeue(arr, 3));
