/**
 * find max diff between any two elements such that larger element appears after lower.
 */
const maximumDifferenceBetweenTwoElements = (input) => {
    let maxDiff = 0;
    let minElement = input[0];
    for(let i = 1; i < input.length; i++) {
        if(input[i] - minElement > maxDiff) {
            maxDiff = input[i] - minElement;
        }
        if(input[i] < minElement) {
            minElement = input[i];
        }
    }
    console.log(maxDiff);
}

//time -> O(n) | space -> O(n)
const maximumDifferenceBetweenTwoElementsAlternate = (input) => {
    const diff = [];
    for(let i = 1; i < input.length; i++) {
        diff[i - 1] = input[i] - input[i - 1];
    }

    let maxDiff = diff[0];
    for(let i = 1; i < input.length - 1; i++) {
        if(diff[i - 1] > 0) diff[i] += diff[i - 1];
        if(diff[i] > maxDiff) maxDiff = diff[i];
    }
    console.log(maxDiff);
}

let input = [2, 3, 10, 6, 4, 8, 1];
maximumDifferenceBetweenTwoElements(input);
input = [7, 9, 5, 6, 3, 2];
maximumDifferenceBetweenTwoElements(input);


input = [2, 3, 10, 6, 4, 8, 1];
maximumDifferenceBetweenTwoElementsAlternate(input);
input = [7, 9, 5, 6, 3, 2];
maximumDifferenceBetweenTwoElementsAlternate(input);
