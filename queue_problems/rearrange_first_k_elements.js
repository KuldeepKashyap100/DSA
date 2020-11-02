const rearrange = (queue, k) => {
    const stack = [];
    let temp = k;
    while(temp--) {
        stack.push(queue.shift());
    }
    temp = k;
    while(temp--) {
        queue.push(stack.pop());
    }
    temp = queue.length - k;
    while(temp--) {
        queue.push(queue.shift());
    }
}

const queue = [1,2,3,4,5,6,7,8,9];
const k = 4;
rearrange(queue, k);

console.log(queue);