
// recursive approach
const reverseQueue = (queue) => {
    if(queue.length === 0) {
        return;
    }
    const dequedElement = queue.shift();
    reverseQueue(queue);
    queue.push(dequedElement);
}
const queue = [1,2,3,4,5];
reverseQueue(queue);

console.log(queue);