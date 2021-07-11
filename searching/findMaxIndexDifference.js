/**
 * find max j - i  such that a[j] > a[i].
 * time -> O(n^2) | space -> O(1)
 */

const findMaxIndexDifference = (input) => {
    let maxIndexDifference = 0;
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if(input[j] > input[i] & maxIndexDifference < j - i) {
                maxIndexDifference = j - i;
            }
        }
    }
    console.log(maxIndexDifference);
}

const findMaxIndexDifferenceImproved = (input) => {
    const leftMin = [], rightMax = [];
    leftMin[0] = input[0];
    rightMax[input.length - 1] = input[input.length - 1];
    for(let i = 1; i < input.length; i++) {
        leftMin[i] = Math.min(input[i], leftMin[i - 1]);
    }
    for(let i = input.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(input[i], rightMax[i + 1]);
    }
    let maxDiff = -1, i = 0, j = 0;
    while(i < input.length && j < input.length) {
        if(leftMin[i] < rightMax[j]) {
            maxDiff = Math.max(j - i, maxDiff);
            j++;
        }
        else {
            i++;
        }
    }
    console.log(maxDiff);
}

const input = [34, 8, 10, 3, 2, 80, 30, 33, 1];
findMaxIndexDifference(input);
findMaxIndexDifferenceImproved(input);