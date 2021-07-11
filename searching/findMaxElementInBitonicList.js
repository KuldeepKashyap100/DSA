// time -> O(logn) |  space -> O(1)
const findMaxElementInBitonicList = (input, left, right) => {
    // if(left > right) return null;
    if(left === right) return input[left];
    if(left === right - 1 && input[left] < input[right]) return input[right];
    if(left === right - 1 && input[left] > input[right]) return input[left];

    const mid = Math.floor(left + (right - left) / 2);
    if(input[mid] > input[mid - 1] && input[mid] > input[mid + 1]) return input[mid];
    if(input[mid] > input[mid - 1] && input[mid] < input[mid + 1])
        return findMaxElementInBitonicList(input, mid + 1, right);
    else
        return findMaxElementInBitonicList(input, left, mid - 1);
    
}

const input = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
console.log(findMaxElementInBitonicList(input, 0, input.length - 1));