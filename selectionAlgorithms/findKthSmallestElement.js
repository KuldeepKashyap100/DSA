const BinarySearchTree = require("../tree/binary_search_tree/BinarySearchTree");
const MaxHeap = require("../heap/Heap").MaxHeap;
// time -> O(N^2) | space -> O(k)
const findKthSmallestElementBruteForce = (input, k) => {
    const smallestElements = [];
    let min = Infinity;
    for(let i = 0; i < k; i++) {
        min = Infinity;
        for(let j = 0; j < input.length; j++) {
            if(min > input[j] && !smallestElements.includes(input[j])) {
                min = input[j];
            }
        }
        smallestElements.push(min);
    }
    console.log(min);
}

// time -> O(nlogn) | space -> O(1)
const findKthSmallestElementUsingSorting = (input, k) => {
    input.sort((a, b) => a - b);
    console.log(input[k - 1]);
}

/**
 * insert n elements to BST in nlogn time and print inorder traversal upto k elements.
 * time -> O(nlogn + k) | space -> O(1)
 */

const findKthSmallestElementUsingBST = (input, k) => {
    const binarySearchTree = new BinarySearchTree();
    input.forEach(_ => binarySearchTree.insert(_));
    inOrderTraversalWithLimitStop(binarySearchTree.root, k);
}

const inOrderTraversalWithLimitStop = (root, limit) => {
    if(!root) return;
    inOrderTraversalWithLimitStop(root.left, limit);

    if(!limit) return;
    console.log(root.data); 
    limit--;

    inOrderTraversalWithLimitStop(root.right, limit);
}

/**
 * More Improved approach: 
 * Select first k elements and insert them on max heap.     --> O(klogk)
 * now iterate the elements left                    --> O((n - k)logk)[in work case n-k elements will be inserted into heap]
 * if the element is greater than the max in heap skip it
 * otherwise if it is smaller delete max from heap and insert new element
 * time -> O(klogk + (n-k)logk) ->O(nlogk) |  space -> O(1)
 */
const findKthSmallestElementUsingHeap = (input, k) => {
    const heap = new MaxHeap(); 
    for(let i = 0; i < k; i++) {
        heap.insert(input[i]);
    }
    for(let i = k; i < input.length; i++) {
        const max = heap.getMaximumElement();
        if(input[k] < max) {
            heap.delete();
            heap.insert(input[k]);
        }
    }
    console.log(heap.getMaximumElement());
}

/**
 * partitioning technique [similar to quick sort]
 * 1. choose pivot 
 * 2. partition array 
 * 3. if k = pivot return then it is kth smallest element
 * 4. if k < pivot repeat on first half of array
 * 5. if k > pivot repeat on second half of array
 * time -> worst ->O(n^2), average -> O(nlogk) |  space -> O(1)
 */
const findKthSmallestElementUsingPartitioning = (input, left, right, k) => {
    if(left === right) {
        console.log(input[left]);
        return
    }
    const pivot = partitionQuick(input, left, right);
    if(pivot === k - 1) {
        console.log(input[k-1]);
        return;
    }
    if(pivot > k -1) findKthSmallestElementUsingPartitioning(input, left, pivot - 1, k);
    else findKthSmallestElementUsingPartitioning(input, pivot + 1, right, k);
}

const partitionQuick = (input, left, right) => {
    const pivot = input[left];
    const pivotPosition = left;
    while(left < right) {
        while(input[left] <= pivot) left++;
        while(input[right] > pivot) right--;
        if(left < right)
            [input[left], input[right]] = [input[right], input[left]];
    }
    [input[pivotPosition], input[right]] = [input[right], input[pivotPosition]];
    return right;
}

/**
 * https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array-set-3-worst-case-linear-time/
 * Median of medians technique (similar to partitioning but finding pivot is little different)
 * kthSmallest(arr[0..n-1], k)
 * 1) Divide arr[] into ⌈n/5⌉ groups where size of each group is 5 except possibly the last group which may have less than 5 elements.
 * 2) Sort the above created ⌈n/5⌉ groups and find median of all groups. Create an auxiliary array ‘median[]’ and store medians of all ⌈n/5⌉ groups in this median array.
 *  Recursively call this method to find median of median[0..⌈n/5⌉-1]
 * 3) medOfMed = kthSmallest(median[0..⌈n/5⌉-1], ⌈n/10⌉)
 * 4) Partition arr[] around medOfMed and obtain its position.
 * pos = partition(arr, n, medOfMed)
 * 5) If pos == k return medOfMed
 * 6) If pos > k return kthSmallest(arr[l..pos-1], k)
 * 7) If pos < k return kthSmallest(arr[pos+1..r], k-pos+l-1)
 */
const findKthSmallestElement= (input, left, right, k) => {
    if(k < 0 || k > input.length) return;
    let n = right - left + 1;
    const medianList = [];

    let i = 0;
    for(; i < Math.floor(n/5); i++) {
        const start = left + i * 5;
        const end = left + 4;
        medianList[i] = findMedian(input, start, end);
    }

    // For last group with less than 5 elements 
    if(i*5 < n) {
        const start = left + i * 5;
        const end = i * 5 + n % 5 - 1;
        medianList[i] = findMedian(input, start, end);
        i++;
    }

    // Find median of all medians using recursive call. 
    // If median[] has only one element, then no need 
    // of recursive call 
    const medianOfmedians = i === 1 ? medianList[i - 1] : findKthSmallestElement(medianList, 0, i - 1, i/2);

    // Partition the array around a random element and 
    // get position of pivot element in sorted array 
    let position = partition(input, left, right, medianOfmedians);

    if(position === k - 1) return input[position];
    if(position > k - 1) return findKthSmallestElement(input, left, position - 1, k);
    return findKthSmallestElement(input, position + 1, right, k);
}

const findMedian = (input, left, right) => {
    insertionSort(input, left, right);
    return Math.floor((left + right)/2);
}

const insertionSort = (input, left, right) => {
    for(let i = left; i <= right; i++) {
        const curretElement = input[i];
        let j = i - 1;
        for(; j >= left && input[j] > curretElement; j--) {
            input[j + 1] = input[j];
        }
        input[j + 1] = curretElement;
    }
}

const partition = (input, left, right, medianOfMedians) => {
    const pivot = input[medianOfMedians];
    [input[medianOfMedians], input[left]] = [input[left], input[medianOfMedians]];
    const pivotPosition = left;
    while(left < right) {
        while(input[left] <= pivot) left++;
        while(input[right] > pivot) right--;
        if(left < right) {
            [input[left], input[right]] = [input[right], input[left]]
        }
    }
    [input[pivotPosition], input[right]] = [input[right], input[pivotPosition]];
    return right;
}

let input = [3, 2, 9, 7, 1, 10, 5, 5];
findKthSmallestElementBruteForce(input, 3);
// findKthSmallestElementUsingSorting(input, 2);
console.log("");
// findKthSmallestElementUsingBST(input, 2);
// findKthSmallestElementUsingHeap(input, 3);
input = [3, 2, 9, 7, 1, 0, 5, 10];
// findKthSmallestElementUsingPartitioning(input, 0, input.length - 1, 3);
input = [3, 2, 9, 7, 1, 10, 5, 0];
console.log(findKthSmallestElement(input, 0, input.length - 1, 5));
