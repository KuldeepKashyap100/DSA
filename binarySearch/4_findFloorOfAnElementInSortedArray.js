
const findFloorOfAnElementInSortedArray = (arr, ele) => {
    let start = 0, end = arr.length - 1, floorElement = -1;
    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] === floorElement) {
            floorElement = arr[mid];
            break;
        }
        else if(arr[mid] > ele) {
            end = mid - 1;
        }
        else if(arr[mid] < ele) {
            floorElement = arr[mid];
            start = mid + 1;
        }
    }
    console.log(floorElement);
}

const arr = [2, 3, 4, 8, 11, 12, 15, 18];
findFloorOfAnElementInSortedArray(arr, 5);