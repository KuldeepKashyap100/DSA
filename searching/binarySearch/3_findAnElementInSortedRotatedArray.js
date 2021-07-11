
// time -> O(logn + logn)
const findMinElementInRotatedSortedArray = (arr, data) => {
    const minIdx = findMinElementIdx(arr);
    console.log(binarySearch(arr, 0, minIdx, data) || binarySearch(arr, minIdx + 1, arr.length - 1, data));
}

const findMinElementIdx = (arr) => {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        if(arr[start] < arr[end]) {
            return start;
        }
        const mid = Math.floor(start + (end - start) / 2);
        const next = (mid + 1) % arr.length;
        const prev = (mid - 1 + arr.length) % arr.length;

        if(arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
            return mid;
        }
        else if(arr[start] <= arr[mid]) {
            start = mid + 1;
        }
        else if(arr[mid] <= arr[end]) {
            end = mid - 1;
        }
    }
}

const binarySearch = (arr, start, end, data) => {
    if(start > end) return false;

    const mid =  Math.floor(start + (end - start) / 2);
    if(arr[mid] === data) return true;
    if(arr[mid] > data) return binarySearch(arr, start, mid - 1, data);
    if(arr[mid] < data) return binarySearch(arr, mid + 1, end, data);
}

const arr = [11, 12, 15, 18, 2, 5, 6, 8];
findMinElementInRotatedSortedArray(arr, 18);