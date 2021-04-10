const maxWindowSum = (input, windowSize) => {
    let left = 0, right = 0;
    let sum = 0, maxSum = -Infinity;
    while(right < input.length) {
        sum += input[right++];
        if(right - left < windowSize) continue;
        maxSum = Math.max(sum, maxSum);
        sum -= input[left++];
    }
    console.log(maxSum);
}

const input = [1, 3, -1, -3, 5, 3, 6, 7];
maxWindowSum(input, 3);