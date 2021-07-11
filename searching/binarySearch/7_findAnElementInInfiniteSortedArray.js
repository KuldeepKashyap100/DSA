
// means assume we don't know the size of the array
const findAnElementInInfiniteSortedArray = (arr, ele) => {
    let start = 0, end = 1;
    // find range where ele could be present
    while(ele > arr[end]) {
        start = end;
        end = end * 2;
    }

    console.log(binarySearch(arr, start, end, ele));
}

function binarySearch(arr, start, end, data) {
    if(start > end) return -1;

    const mid = Math.floor(start + (end - start) / 2)
    if(arr[mid] === data) return mid;
    if(arr[mid] > data) return binarySearch(arr, start, mid - 1, data);
    if(arr[mid] < data) return binarySearch(arr, mid + 1, end, data);
}
const arr = [2, 3, 4, 8, 11, 12, 15, 18];
findAnElementInInfiniteSortedArray(arr, 18);

