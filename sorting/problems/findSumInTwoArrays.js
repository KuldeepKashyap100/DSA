/**
 * given 2 arrays and k find  2 elements one in each array and sum of both equal to k.
 */

const findTwoElements = (first, second, k) => {
    mergeSortUtil(second);
    for(let i = 0; i < first.length; i++) {
        const remainingSum = k - first[i];
        if(binarySearchUtil(second, remainingSum)) {
            return [first[i], remainingSum];
        }
    }
    return [];
}

const a = [3, 5, 2, 7, 9];
const b = [6, 1, 10, 8, 4];


console.log(findTwoElements(a, b, 17));

function mergeSortUtil(input) {
    const sortedList = [];
    mergeSort(input, 0, input.length - 1, sortedList);
}

function mergeSort(input, left, right, sortedList) {
    if(left >= right) return;
    const mid = Math.floor((left  + right) / 2);
    mergeSort(input, left, mid, sortedList);
    mergeSort(input, mid + 1, right, sortedList);
    merge(input, left, mid, right, sortedList);
}

function merge(input, left, mid, right, sortedList) {
    let rightStart = mid + 1;
    let insertPosition = left;
    while(left <= mid && rightStart <= right) {
        if(input[left] < input[rightStart]) {
            sortedList[insertPosition] = input[left];
            left++;
        }
        else {
            sortedList[insertPosition] = input[rightStart];
            rightStart++;
        }
        insertPosition++;
    }
    while(left <= mid) {
        sortedList[insertPosition] = input[left];
        left++;
    }
    while(rightStart <= right) {
        sortedList[rightStart] = input[rightStart];
        rightStart++;
    }

    for(let i = right; i >= 0; i--) {
        input[i] = sortedList[i];
    }
}

function binarySearchUtil(input, elementToBeSearched) {
    return binarySearch(input, 0, input.length, elementToBeSearched);
}

function binarySearch(input, left, right, elementToBeSearched) {
    const mid = Math.floor((left + right) / 2);
    if(left > right) return false;
    if(input[mid] === elementToBeSearched) return true;
    if(input[mid] > elementToBeSearched) return binarySearch(input, left, mid, elementToBeSearched);
    return binarySearch(input, mid + 1, right, elementToBeSearched)
}