/**
 * Given a set of time intervals in any order, 
 * merge all overlapping intervals into one and output 
 * the result which should have only mutually exclusive intervals. 
 * Let the intervals be represented as pairs of integers for simplicity. 
 * For example, let the given set of intervals be {{1,3}, {2,4}, {5,7}, {6,8}}. 
 * The intervals {1,3} and {2,4} overlap with each other, 
 * so they should be merged and become {1, 4}. 
 * Similarly, {5, 7} and {6, 8} should be merged and become {5, 8}
 */
const mergeIntervals = (intervals) => {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    const stack = [];
    stack.push(intervals[0]);
    for(let i = 1; i < intervals.length; i++) {
        const previousInterval = stack[stack.length - 1];
        const currentInterval = intervals[i];
        const [prevIntervalStart, prevIntervalEnd] = previousInterval;
        const [currentIntervalStart, currentIntervalEnd] = currentInterval;
        if(prevIntervalEnd < currentIntervalStart) stack.push(currentInterval);
        else {
            const stackTop = stack[stack.length - 1];
            stackTop[1] = Math.max(stackTop[1], currentIntervalEnd);
        }
    }
    console.log(stack);
}

let intervals = [[6, 8], [1, 9], [2, 4], [4, 7]];
intervals = [[1,3], [2,4], [5,7], [6,8]];
mergeIntervals(intervals);