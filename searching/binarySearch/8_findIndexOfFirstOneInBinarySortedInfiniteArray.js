
const findIndexOffirstOneIdxInBinarySortedInfiniteArray = (arr) => {
    let start = 0, end = 1;
    // find range
    while(arr[end] !== 1){
        start = end;
        end = end * 2;
    }

    // find first one
    let firstOneIdx = -1;
    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] >= 1) {
            firstOneIdx = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    console.log(firstOneIdx);
}

const arr = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
findIndexOffirstOneIdxInBinarySortedInfiniteArray(arr);