/**
 * Quest 14 in book
 * check weather all the characters of pattern present in 2d matrix
 * and each of them must be around another.
 * time -> O(n * n * m) | space -> O(m)
 */
const findMatchWrapper = (matrix, pattern) => {
    if(pattern.length > matrix.length * matrix[0].length) return false;
    const visitedFlagmatrix = new Array(matrix.length).fill().map(() => new Array(matrix[0].length).fill(false));
    return findMatch(matrix, pattern, visitedFlagmatrix, 0, 0, 0);
}

function findMatch(matrix, pattern, visitedFlagmatrix, row, col, level) {
    // pattern matched
    if(level === pattern.length) return true;
    if(row === matrix.length || col === matrix[0].length) return false;
    if(visitedFlagmatrix[row][col]) return false;
    if(matrix[row][col] !== pattern[level] && level === 0) {
        console.log(matrix[row][col], pattern[level]);
        // move to next column
        if(col < matrix[0].length - 1) {
            col = col + 1;
        }
        // move to next row first column
        else if(row < matrix.length - 1 ) {
            row = row + 1
            col = 0;
        }
        return findMatch(matrix, pattern, visitedFlagmatrix, row, col, level) || false;
    }
    else if(matrix[row][col] === pattern[level]) {
        console.log(matrix[row][col], pattern[level])
        let res = false;
        visitedFlagmatrix[row][col] = true; // marking current cell as used
        res = res || (row > 0 ? findMatch(matrix, pattern, visitedFlagmatrix, row - 1, col, level + 1): false);
        res = res || (row < matrix.length - 1 ? findMatch(matrix, pattern, visitedFlagmatrix, row + 1, col, level + 1): false);
        res = res || (col > 0 ? findMatch(matrix, pattern, visitedFlagmatrix, row, col - 1, level + 1): false);
        res = res || (col < matrix[0].length - 1 ? findMatch(matrix, pattern, visitedFlagmatrix, row, col + 1, level + 1): false);
        res = res || ((row < matrix.length - 1) && (col < matrix[0].length - 1) ? findMatch(matrix, pattern, visitedFlagmatrix, row + 1, col + 1, level + 1): false);
        res = res || ((row < matrix.length - 1) && (col > 0) ? findMatch(matrix, pattern, visitedFlagmatrix, row + 1, col - 1, level + 1): false);
        res = res || ((row > 0) && (col < matrix[0].length - 1) ? findMatch(matrix, pattern, visitedFlagmatrix, row - 1, col + 1, level + 1): false);
        res = res || ((row > 0) && (col > 0) ? findMatch(matrix, pattern, visitedFlagmatrix, row - 1, col - 1, level + 1): false);
        visitedFlagmatrix[row][col] = false; // marking current cell as unused
        return res;
    }
    return false;
}

const matrix = [
    ["a", "c", "p", "r", "c"],
    ["x", "s", "o", "p", "c"],
    ["v", "o", "v", "n", "i"],
    ["w", "g", "f", "m", "n"],
    ["z", "a", "t", "i", "t"]
];

console.log(findMatchWrapper(matrix, "microsoft"));