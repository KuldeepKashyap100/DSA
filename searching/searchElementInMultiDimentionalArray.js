// in worst case time -> O(n + n) [n -> row, n -> column]
const searchElementInMultiDimentionalArray = (input, data) => {
    let left = 0;
    let row = 0, column = input[0].length - 1;
    let right = row * column - 1;

    while(row < input.length && column >= 0) {
        if(input[row][column] === data) return true;
        if(input[row][column] > data) column--;
        if(input[row][column] < data) row++;
    }
    return false;
}
// time -> O(logn) | space -> O(1) [may fail for some cases]
const searchElementInMultiDimentionalArrayAlternate = (input, data) => {
    let left = 0;
    let row = input.length, column = input[0].length;
    let right = row * column - 1;
    while(left <= right)  {
        let mid = Math.floor((left + right) / 2);
        let midRow = Math.floor(mid / column);
        let midColumn = mid % column;
        if(input[midRow][midColumn] === data) return true;
        if(input[midRow][midColumn] > data) right = mid - 1;
        else left = mid + 1;
    }
    return false;
};

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(searchElementInMultiDimentionalArray(input, 10.5));
