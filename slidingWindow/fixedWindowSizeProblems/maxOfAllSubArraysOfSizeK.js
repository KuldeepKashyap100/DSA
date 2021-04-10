
const getMaxSubArray = (input, windowSize) => {
    const maxSubArray = [], queue = [];
    for(let left = 0, right = 0; right < input.length;) {
        let currentMaxElement = input[queue[0]];
        // if the previous elements are smaller than current element 
        // they are no longer needed because they are smaller and they will
        // be eliminated from the current window first
        if(currentMaxElement < input[right]) {
            queue.shift();
            continue;
        }
        if(queue[0] < left) 
            queue.shift();
        queue.push(right);
        // wait until window size is reached
        if(right - left + 1 < windowSize) {
            right++;
            continue;
        }
        // max element will always be present on front
        currentMaxElement = input[queue[0]];
        maxSubArray.push(currentMaxElement);
        left++;
        right++;
    }
    console.log(maxSubArray);
}

const input = [1, 3, -1, -3, 5, 3, 6, 7];
getMaxSubArray(input, 3);