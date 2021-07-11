/**
 * radix means base of a number
 * In case of number we will be applying from LSB to MSB.
 * And In case of Alphabets order will be reversed.
 * time -> O(d * (N + b)) If we are using counting sort as subroutine, where d is the length of the longest digit.
 * space -> O(N + b) i.e N to store sorted array and k for count array.
 * b = 10 for decimal
 * b = 26 for alphabets
 * https://medium.com/basecs/getting-to-the-root-of-sorting-with-radix-sort-f8e9240d4224
 */

const radixSort = (input) => {
    const maxElement = Math.max(...input);
    
    // Do counting sort for every digit. Note that 
    // instead of passing digit number, position is passed. 
    // position is 10^i where i is current digit number 
    for(let position = 1; Math.floor(maxElement/position) > 0; position*=10) {
        countSort(input, position);
    }
}

const countSort = (input, position) => {
    const sortedList = [];

    let count = Array.from({length: 10}, _ => 0);
    // Store count of occurrences in count[] 
    for(let j = 0; j < input.length; j++) {
        const decimalPlaceToBeConsidered = Math.floor(input[j]/position) % 10;
        count[decimalPlaceToBeConsidered]++;
    }

    // Change count[i] so that count[i] now contains 
    // actual position of this digit in sortedList[] 
    for(let i = 1; i < count.length; i++) {
        count[i] = count[i] + count[i - 1];
    }

    // sort based on digit place
    for(let i = input.length - 1; i >= 0; i--) {
        const decimalPlaceToBeConsidered = Math.floor(input[i]/position) % 10;
        sortedList[--count[decimalPlaceToBeConsidered]] = input[i];
    }

    // copy back to input arr
    for(let i = input.length - 1; i >= 0; i--) {
        input[i] = sortedList[i];
    }
}


const input = [ 170, 45, 75, 90, 802, 24, 2, 66 ];
radixSort(input);


console.log(input);