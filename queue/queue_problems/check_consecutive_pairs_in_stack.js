
const checkStackConsecutivePair = (stack) => {
    let consecutivePairExists =  true;
    const queue = [];
    while(stack.length) queue.push(stack.pop());
    while(queue.length) stack.push(queue.shift());

    while(stack.length) {
        const firstValue = stack.pop();
        if(stack.length) {
            const secondValue = stack.pop();
            if(Math.abs(firstValue - secondValue) !== 1)
                consecutivePairExists = false;
        }
    }
    return consecutivePairExists;
}


console.log(checkStackConsecutivePair([4, 5, -2, -3, 11, 10, 5, 6, 20]));