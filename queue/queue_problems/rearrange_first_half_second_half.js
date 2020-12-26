
const rearrange = (queue) => {
    if(queue.length %2 !== 0)
        throw new Error("odd no of elements");
    const stack  = [];
    const queueSize = queue.length;
    while(queue.length !== queueSize/2) {
        stack.push(queue.shift());
    }
    while(stack.length) {
        queue.push(stack.pop());
    }
    for(let i=0; i<queueSize/2; i++) {
        queue.push(queue.shift());
    }
    while(queue.length !== queueSize/2) {
        stack.push(queue.shift());
    }
    while(stack.length) {
        queue.push(stack.pop());
        queue.push(queue.shift());
    }
}

const queue = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
rearrange(queue);
console.log(queue);