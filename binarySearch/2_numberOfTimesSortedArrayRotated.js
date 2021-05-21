

// time -> O(logn)
const findNumberOfTimesSortedArrayRotated = (arr) => {
    let start = 0, end = arr.length - 1;
    // the task is to find the smallest element using binary search
    while(start <= end) {
        if(arr[start] < arr[end]) {
            console.log(arr[start]);
            return;
        }
        const mid = Math.floor(start + (end - start) / 2);
        const prev = (mid + 1) % arr.length;
        const next = (mid - 1 + arr.length) % arr.length;

        if(arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
            console.log(arr[mid]);
            return;
        }
        else if(arr[start] <= arr[mid]) {
            // unsorted array in first half
            start = mid + 1;
        }
        else if(arr[mid] <= arr[end]) {
            // unsorted array in second half
            end = mid - 1;
        }
    }
}


const arr = [11, 12, 15, 18, 2, 5, 6, 8];
findNumberOfTimesSortedArrayRotated(arr);