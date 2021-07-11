/**
 * time -> O(K) + O(N) + O(K) + O(N) -> O(N + K)
 * space -> O(N + K)
 * 
 * If max value is n^2 then size of count array is n^2. In that case space complexity rises drastically.
 * It cannot work on negative values but we can normalize array to make it work. Find most -ve value and add it to entire array elements. 
 * For floating point array we can use bucket sort.
 */
const countingSort = (input, k) => {
    const count = [];
    const sortedList = [];

    // initialize count array with 0 count
    for(let i = 0; i < k; i++) {
        count[i] = 0;
    }

    // traverse list and increment count
    for(let i = 0; i < input.length; i++) {
        count[input[i]]++;
    }

    // update count to contain sorted index
    for(let i = 1; i < k; i++) {
        count[i] = count[i] + count[i - 1];
    }

    // now sort the elements using count list
    // reason for starting from back is to maintain stability of sorting algo.
    for(let i = input.length - 1; i >= 0; i--) {
        const currentItem = input[i];
        const newIdx = --count[currentItem];
        sortedList[newIdx] = currentItem;
    }
    return sortedList;
}

const input = [10, 16, 8, 12, 15, 6, 3, 9, 5];
const sortedArray = countingSort(input, Math.max(...input) + 1);

console.log(sortedArray);