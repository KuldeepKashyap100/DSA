

/**
 * time -> O(nK)  
 * for explanation check out question 24 in book
 */
const mergeKSortedLists = (input, k) => {
    const sortedList = new Array(input.length);
    for(let i = k; i < input.length; i+=k) {
        merge(input, i, k, sortedList);
    }
    console.log(input);
}

function merge(input, secondListStart, k, sortedList) {
    let firstStart = 0;
    let firstEnd = secondListStart - 1;
    let secondListEnd = secondListStart + k - 1;
    let insertIndex = 0;
    while(firstStart <= firstEnd && secondListStart <= secondListEnd) {
        if(input[firstStart] < input[secondListStart]) {
            sortedList[insertIndex++] = input[firstStart++];
        }
        else {
            sortedList[insertIndex++] = input[secondListStart++];
        }
    }
    while(firstStart <= firstEnd) {
        sortedList[insertIndex++] = input[firstStart++];
    }
    while(secondListStart <= secondListEnd) {
        sortedList[insertIndex++] = input[secondListStart++];
    }

    for(let i = secondListEnd; i >= 0; i--) {
        input[i] = sortedList[i];
    }
}

/**
 * time -> O(nLogK)
 * tournament sort can also be used in external sort instead of k-way merge.
 */

const mergeKSortedListsEfficient = (input, left, right, k, sortedList) => {
    const partions = (right - left + 1) / k;
    if(partions < 2) return;
    // const mid = left + Math.floor((right - left) / 2);
    const mid = left + Math.ceil(partions / 2) * k - 1;
    mergeKSortedListsEfficient(input, left, mid, k, sortedList);
    mergeKSortedListsEfficient(input, mid + 1, right, k, sortedList);
    mergeEfficient(input, left, mid, right, sortedList);
}

const mergeEfficient = (input, left, mid, right, sortedList) => {
    let rightStart = mid + 1;
    let insertIndex = left; 
    while(left <= mid && rightStart <= right) {
        if(input[left] < input[rightStart]) {
            sortedList[insertIndex++] = input[left++];
        }
        else {
            sortedList[insertIndex++] = input[rightStart++];
        }
    }
    while(left <= mid) {
        sortedList[insertIndex++] = input[left++];
    }
    while(rightStart <= right) {
        sortedList[insertIndex++] = input[rightStart++];
    }
    for(let i = right; i >=0; i--) {
        input[i] = sortedList[i];
    }
}

/**
 * Another implementation is also possible using priorityQueue implement it whenever get time :)
 * Refer question 26 and refer great article related to tournament sort https://www.geeksforgeeks.org/tournament-tree-and-binary-heap/
 */


const input = [25,26,27,28, 1,2,3,4, 30,31,32,33, 7,8,9,10, 12,13,14,15 ];
// mergeKSortedLists(input, 4);
const sortedList = new Array(input.length)
mergeKSortedListsEfficient(input, 0, input.length - 1, 4, sortedList);

console.log(input);