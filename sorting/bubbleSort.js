/**
 * Largest element bubbles up to the end of the array.
 * Its best use is to detect if the array is already sorted or not.
 * time -> O(N^2)
 */
const bubbleSort = (input) => {
    for(let pass = input.length - 1; pass >= 0; pass--) {
        for(let i = 0; i < pass - 1; i++) {
            if(input[i] > input[i + 1])
                [input[i], input[i + 1]] = [input[i + 1], input[i]]
        }
    }
    // for(let i = 0; i < input.length - 1; i++) {
    //     for(let j = 0; j < input.length - i - 1; j++) {
    //         if(input[j] > input[j + 1])
    //             [input[j], input[j + 1]] = [input[j + 1], input[j]]
    //     }
    // }
}

// time -> o(n) in best case when the array is already sorted
const bubbleSortModified = (input) => {
    let swapped = true;
    for(let pass = input.length - 1; pass >= 0 && swapped; pass--) {
        for(let i = 0; i < pass - 1; i++) {
            swapped = false;
            if(input[i] > input[i + 1]) {
                [input[i], input[i + 1]] = [input[i + 1], input[i]];
                swapped = true;
            }
        }
    }
}

const input = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(input);
bubbleSortModified(input);

console.log(input);


/**
 * $
 * $$
 * $$$
 * $$$$
 * $$$$$
 * $$$$$$
 * It is skipping the already sorted elements in front of the array. so by default n^2 comparison was supposed to perform.
 * But due to skipping it is n^2/2 as you can see on the above diagram.
 */