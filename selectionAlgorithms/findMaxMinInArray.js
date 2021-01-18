/**
 * time -> O(N) |  space -> O(1)
 * no of comparisons -> 2(n - 1)
 */
const findMinMax = (input) => {
    let min = input[0], max = input[0];
    let noOfComparisons = 0;
    for(let i = 1; i < input.length; i++) {
        if(input[i] < min) min = input[i];
        if(input[i] > max) max = input[i];
        noOfComparisons = noOfComparisons + 2;
    }
    console.log(min, max, noOfComparisons);
}

/**
 * time -> O(N) |  space -> O(1)
 * no of comparisons -> 
 *  If n is odd:    3*(n-1)/2  
 *  If n is even:   1 Initial comparison for initializing min and max, 
 *  and 3(n-2)/2 comparisons for rest of the elements  =  1 + 3*(n-2)/2 = 3n/2 -2
 */

const findMinMaxImproved = (input) => {
    let min = input[0], max = input[0];
    let noOfComparisons = 0;

    for(let i = 1; i < input.length; i = i + 2) {
        if(input[i] < input[i + 1]) {
            if(input[i + 1] > max) max = input[i + 1];
            if(input[i] < min) min = input[i];
            noOfComparisons = noOfComparisons + 2;
        }
        else {
            if(input[i] > max) max = input[i];
            if(input[i + 1] < min) min = input[i];
            noOfComparisons = noOfComparisons + 2;
        }
        noOfComparisons = noOfComparisons + 1;
    }
    console.log(min, max, noOfComparisons);

}

// we can also use divide and conquer to solve this problem.

const input = [3, 2, 7, 1 , 99];
findMinMax(input);
findMinMaxImproved(input);