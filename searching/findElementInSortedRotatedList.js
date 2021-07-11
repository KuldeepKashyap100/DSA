// time -> O(logn) | space -> O(1)
const findElementInSortedRotatedList = (input, searchElement) => {
    const pivot = findPivot(input, 0, input.length - 1);
    if(input[pivot] >= searchElement) return binarySearch(input, pivot + 1, input.length - 1, searchElement);
    else return binarySearch(input, 0, pivot - 1, searchElement);
}

function findPivot(input, left, right) {
    if(left === right) return left;
    if(left === right - 1) return input[left] > input[right] ? left : right;
    const mid = Math.floor(left + (right - left) / 2);
    if(input[left] >= input[mid]) 
        return findPivot(input, left, mid);
    else
        return findPivot(input, mid, right);
}

function binarySearch(input, left, right, x) {
    if(left > right) return false;
    const mid =  Math.floor(left + (right - left) / 2);
    if(input[mid] === x) return true;
    if(input[mid] >= x) 
        return binarySearch(input, left, mid - 1, x);
    else
        return binarySearch(input, mid + 1, right, x);

}

// time -> O(logn) | space -> O(1)
const searchInOneScan = (input, left, right, data) => {
    if(left > right) return false;
    const mid = Math.floor(left + (right - left) / 2);
    if(input[mid] === data) return true;
    if(input[left] <= input[mid]) {
        if(data >= input[left] && data < input[mid]) 
            return searchInOneScan(input, left, mid - 1, data);
        else
            return searchInOneScan(input, mid + 1, right, data);
    }
    else {
        if(data > input[mid] && data <= input[right]) 
            return searchInOneScan(input, mid + 1, right, data);
        else
            return searchInOneScan(input, left, mid - 1, data);
    }
}

const input = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
console.log(findElementInSortedRotatedList(input, 10));
console.log(searchInOneScan(input, 0, input.length - 1, 10));
