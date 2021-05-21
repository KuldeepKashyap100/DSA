
// given a key find the element in sorted 
// which have minimum absolute difference be between key and that element.
const findMinimumKeyDifferenceElement = (arr, key) => {
    let start = 0, end = arr.length - 1;
    // find the element if it exists then absolute difference becomes 0.
    // otherwise if the element does not exists we find its closest neighbours.
    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] === key) {
            console.log(arr[mid] - key);
            break;
        }
        else if(arr[mid] > key) {
            end = mid - 1;
        }
        else if(arr[mid] < key) {
            start = mid + 1;
        }
    }

    const elementWhichGivesMinAbsDiff = Math.abs(arr[start] - key) > Math.abs(arr[end] - key) ? arr[end] : arr[start];
    console.log(elementWhichGivesMinAbsDiff);

}
const arr = [2, 3, 4, 8, 11, 12, 15, 18];
findMinimumKeyDifferenceElement(arr, 13);