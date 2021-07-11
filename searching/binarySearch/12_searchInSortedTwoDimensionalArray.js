// array is sorted row wise and column wise
const searchInSortedTwoDimensionalArray = (arr, data) => {
    let row = 0, col = arr[0].length - 1;
    while(row < arr.length && col >= 0) {
        if(arr[row][col] === data) {
            console.log(arr[row][col], row, col)
            return;
        }
        else if(arr[row][col] > data) {
            col--;
        }
        else if(arr[row][col] < data) {
            row++;
        }
    }
    return -1;
}
const arr = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
];
searchInSortedTwoDimensionalArray(arr, 29);