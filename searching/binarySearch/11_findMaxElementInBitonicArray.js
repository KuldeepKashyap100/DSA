
//  A Bitonic Sequence is a sequence of numbers that is 
// first strictly increasing then after a point strictly decreasing.
const findMaxElementInBitonicArray = (arr) => {
    let start = 0, end = arr.length - 1;
    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if(arr[mid] < arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else  {
            if(mid > 0 && mid < arr.length - 1) {
                if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
                    console.log(arr[mid]);
                    break;
                }
            }
            else if(mid === 0 && arr[mid] > arr[mid + 1]) {
                console.log(arr[mid]);
                break;
            }
            else if(mid === arr.length - 1 && arr[mid] > arr[mid - 1]) {
                console.log(arr[mid]);
                break;
            }
        }
    }
}
const arr = [5, 6, 7, 8, 9, 10, 3, 2, 1];
findMaxElementInBitonicArray(arr);