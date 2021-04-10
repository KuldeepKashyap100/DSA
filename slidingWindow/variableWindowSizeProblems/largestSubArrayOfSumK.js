/**
 * In variable window size problems we have to maximize or minimize
 * window size while on the other hand in fixed window size we have to
 * maximize or minimize some other constraint.
 */

const getLargestSubArray = (input, k) => {
    let left = 0, right = 0, sum = 0, maxSubArrayLength = 0;
    while(right < input.length) {
        sum += input[right];
        // check if sum exceeds the expected value of sum that is k
        if(sum > k) {
            // if exceeds remove elements from the left end of window
            // and try to reduce sum below or equal the expected sum value
            while(sum > k) {
                sum -= input[left];
                left++;
            }
        }
        // if sum is equal to expected sum than we have found the 
        // possible candidate store it
        if(sum === k) {
            console.log(right - left + 1);
            maxSubArrayLength = Math.max(maxSubArrayLength, right - left + 1);
        }
        right++;
    }
    // console.log(maxSubArrayLength); 
}

const input = [4, 1, 1, 1, 2, 3, 5];
const sum = 5;
getLargestSubArray(input, sum);