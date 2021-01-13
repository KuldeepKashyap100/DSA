/**
 * n * n array where in each row all 1's are followed by 0's.
 * find row with max number of zeros.
 */
const findRowWithMaxZerosInMultidimensionalArray = (input) => {
    let row = 0, column = input.length - 1;
    let count = 0;
    while(row < input.length && column >= 0) {
        if(input[row][column] === 0) {
            count++;
            column--;
        }
        else
            row++;
    }
    console.log(count);
}

const input = [
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
  ];
findRowWithMaxZerosInMultidimensionalArray(input);
  