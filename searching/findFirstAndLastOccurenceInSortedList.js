// time -> O(logn) | space -> O(1)
const findFirstOccurence = (input, left, right, data) => {
    if(left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    if((mid === 0 || input[mid - 1] < data) && input[mid] === data) return mid;
    
    if(input[mid] >= data) return findFirstOccurence(input, left, mid - 1, data);
    else return findFirstOccurence(input, mid + 1, right, data);

}
const lastFirstOccurence = (input, left, right, data) => {
    if(left > right) return null;
    const mid = Math.floor(left + (right - left) / 2);
    if((mid === input.length - 1 || input[mid + 1] > data) && input[mid] === data) return mid;
    
    if(input[mid] > data) return lastFirstOccurence(input, left, mid - 1, data);
    else return lastFirstOccurence(input, mid + 1, right, data);
}

const input = [0, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8];
console.log(findFirstOccurence(input, 0, input.length - 1, 6));
console.log(lastFirstOccurence(input, 0, input.length - 1, 6));
