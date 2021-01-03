
/**
 * time -> O(NlogN) in all the cases
 * space -> O(N)
 */
const mergeSort = (input, left, right) => {
    if(left >= right) 
        return;
    const mid = Math.floor((left + right) / 2);
    // sort recursively
    mergeSort(input, left, mid);
    mergeSort(input, mid + 1, right);
    merge(input, left, mid, right);
}

const merge = (input, left, mid, right) => {
    let rightStart = mid + 1;
    let insertPosition = left;

    // compare and sort both sub parts 
    while((left <= mid) && (rightStart <= right)) {
        if(input[left] < input[rightStart]) {
            temp[insertPosition] = input[left];
            left++;
        }
        else {
            temp[insertPosition] = input[rightStart];
            rightStart++;
        }
        insertPosition++;
    }

    // empty left array if remaining elements
    while(left <= mid) {
        temp[insertPosition] = input[left];
        left++;
        insertPosition++;
    }

    // empty right array if remaining elements
    while(rightStart <= right) {
        temp[insertPosition] = input[rightStart];
        rightStart++;
        insertPosition++;
    }

    // copy back to original array
    for(let i = right; i >= 0; i--) {
        input[i] = temp[i];
    }
}

const input = [64, 34, 25, 12, 22, 11, 90];
const temp = [];
mergeSort(input, 0, input.length - 1);

console.log(input);