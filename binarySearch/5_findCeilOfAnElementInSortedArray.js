
const findCeilOfAnElmentInSortedArray = (arr, ele) => {
    let start = 0, end = arr.length - 1, ceilElement = -1;
    while(start < end) {
        const mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] === ele) {
            ceilElement = arr[mid];
        }
        else if(arr[mid] > ele) {
            ceilElement = arr[mid];
            end = mid - 1;
        }
        else if(arr[mid] < ele) {
            start = mid + 1;
        }
    }
    console.log(ceilElement);
}

const arr = [2, 3, 4, 8, 11, 12, 15, 18];
findCeilOfAnElmentInSortedArray(arr, 13);