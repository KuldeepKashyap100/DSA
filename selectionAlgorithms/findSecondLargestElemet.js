/**
 * no. of comparisons = n - 1 + n - 2 
 * [find largest element in (n - 1) and delete it then second largest element in n - 2] 
 */ 
const findSecondLargestElement = (input) => {
    let max = input[0];
    for(let i = 1; i < input.length; i++) {
        if(input[i] > max) max = input[i];
    }
    let secondMax = -1;
    for(let i = 0; i < input.length; i++) {
        if(input[i] > secondMax && max !== input[i]) secondMax = input[i];
    }
    console.log(secondMax);
}

/**
 * The tournament method
 * Assumption -> input length is in power of 2 and all +ve numbers.
 * 3  2  9   7  1  0  5  10
 * \  /   \  /   \ /   \  /
 *  3      9      1     10
 *   \   /         \   /
 *     9            10
 *      \           /
 *       \         /
 *        \       /
 *         \     /
 *            10
 * 
 * no. of comparisons to construct binary tree - > n - 1
 * no. of keys lost to find largest -> logn
 * no. of comparisons to find largest -> logn - 1
 * total no of comparisons -> n + logn - 2
 */
const improved = (input, left, right) => {
    if(left > right) return -1;
    if(right - left === 1) return input[left] > input[right] ? input[left] : input[right];
    const mid = Math.floor(left + (right - left) / 2);
    const leftMax = improved(input, left, mid);
    const rightMax = improved(input, mid + 1, right);
    // in the last round let the second largest win
    if(left === 0 && right === input.length - 1) return leftMax > rightMax ? rightMax : leftMax;
    return leftMax > rightMax ? leftMax : rightMax;
}


// we can also accomplish this in n - 1 if use another variable to store second largest while traversing input array.

const input = [3, 2, 9, 7, 1, 0, 5, 10];
findSecondLargestElement(input);
console.log(improved(input, 0, input.length - 1));