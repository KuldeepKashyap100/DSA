const getFirstNegativeNumber = (input, windowSize) => {
    const negativeNums = [], queue = [];
    let left = 0, right = 0;
    while(right < input.length) {
        // if element is -ve put it inside queue
        if(input[right] < 0) {
            queue.push(right);
        }
        // if element is out of the window remove it from the queue
        if(queue[0] < left) 
            queue.shift();
        
        // skip until window size is reached
        if(right - left + 1 < windowSize) {
            right++;
            continue;
        }
        // pick first negative element from the queue
        if(queue.length) {
            const negativeElement = input[queue[0]];
            negativeNums.push(negativeElement);
        }
        // if there are no -ve element in current window push 0
        else 
            negativeNums.push(0);
        left++;
        right++;
    }
    // total number of elements = n - k + 1
    console.log(negativeNums);
}

const input = [12, -5, -7, 8, -15, 30, 16, 28];
getFirstNegativeNumber(input, 3);