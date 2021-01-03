/**
 * Sort n numbers in range from 0 to n^2 – 1 in linear time.
 * refer problem 6 of book for sol. and details
 * 
 * Write each integer in base N, that is each x can be represented as (x1, x2) with x = x1 + x2*N. 
 * Now you can sort it twice with counting sort, 
 * once on x1 and once on x2, resulting in the sorted array.
 */


const sortInLinearTime = (input) => {
    // Do counting sort for first digit in base n. Note that 
    // instead of passing digit number, exp (n^0 = 1) is passed. 
    countSort(input, 1);

    // Do counting sort for second digit in base n. Note that 
    // instead of passing digit number, exp (n^1 = n) is passed. 
    countSort(input, input.length);
}

const countSort = (input, exp) => {
    const count = new Array(input.length).fill(0);
    const sortedList = [];

    for(let i = 0; i < input.length; i++) {
        const placeToBeConsidered = Math.floor(input[i] / exp) % input.length;
        count[placeToBeConsidered]++;
    }

    for(let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for(let i = input.length - 1; i >= 0; i--) {
        const placeToBeConsidered = Math.floor(input[i] / exp) % input.length;
        sortedList[--count[placeToBeConsidered]] = input[i];
    }
    for(let i = 0; i < sortedList.length; i++) {
        input[i] = sortedList[i];
    }
}

// Since array size is 7, elements should be from 0 to 48 
const input = [40, 12, 45, 32, 33, 1, 22];
sortInLinearTime(input);

console.log(input);

/**
 * What if the range is [0,n^3]
 */

const sortInLinearTimeDifferentRange = (input) => {
    for(let i = 0; i < input.length; i++) {
        input[i]--;
    }
    sort(input, 1);
    sort(input, input.length);
    sort(input, Math.pow(input.length, 2));

    for(let i = 0; i < input.length; i++) {
        input[i]++;
    }
}

const sort = (input, exp) => {
    const count = new Array(input.length).fill(0);
    const sortedList = [];

    for(let i = 0; i < input.length; i++) {
        const placeToBeConsidered = Math.floor(input[i] / exp) % input.length;
        count[placeToBeConsidered]++;
    }

    for(let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for(let i = input.length - 1; i >= 0; i--) {
        const placeToBeConsidered = Math.floor(input[i] / exp) % input.length;
        sortedList[--count[placeToBeConsidered]] = input[i];
    }

    for(let i = 0; i < sortedList.length; i++) {
        input[i] = sortedList[i];
    }

}

const input1 = [55, 28, 97, 125, 66];
sortInLinearTimeDifferentRange(input1);

console.log(input1);