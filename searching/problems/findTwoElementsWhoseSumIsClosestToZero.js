
// time -> O(n^2) |  space -> O(1)
const findTwoElementsWhoseSumIsClosestToZero = (input) => {
    const min = { sum: Infinity, i: -1, j : -1 };
    for(let i = 0; i < input.length; i++) {
        for(let j = i + 1; j < input.length; j++) {
            if(Math.abs(input[i] + input[j]) < Math.abs(min.sum)) {
                min.sum = input[i] + input[j];
                min.i = input[i];
                min.j = input[j];
            }
        }
    }
    console.log(min);
}

// time -> O(nlog) | space -> O(1)
//https://www.geeksforgeeks.org/two-pointers-technique/
const findTwoElementsWhoseSumIsClosestToZeroImproved = (input) =>{
    input.sort((a, b) => a - b);
    let left = 0, right = input.length - 1;
    let positiveClosest = Infinity, negativeClosest = -Infinity;
    while (left < right) {
        const temp = input[left] + input[right];
        if(temp > 0) {
            if(temp < positiveClosest) {
                positiveClosest = temp;
            }
            right--;
        }
        else if(temp < 0) {
            if(temp > negativeClosest) {
                negativeClosest = temp;
            }
            left++;
        }
    }
    console.log( Math.min( Math.abs(positiveClosest), Math.abs(negativeClosest) ) );
}

const input = [1, 60, -10, 70, -30, 85];
findTwoElementsWhoseSumIsClosestToZero(input);
findTwoElementsWhoseSumIsClosestToZeroImproved(input);