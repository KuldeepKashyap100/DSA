function checkSortedArray(arr) {
    if(arr.length===1)
        return true;
    return arr[0]<arr[1] && checkSortedArray(arr.slice(1,arr.length))
}

console.log(checkSortedArray([1,2,3,4]));
