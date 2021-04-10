/**
 * A stack permutation is a permutation of objects in the given input queue which is done by transferring elements from input queue to the output queue with the help of a stack and the built-in push and pop functions.
 * The well defined rules are:
 * Only dequeue from the input queue.
 * Use inbuilt push, pop functions in the single stack.
 * Stack and input queue must be empty at the end.
 * Only enqueue to the output queue.
 * 
 * There are a huge number of permutations possible using a stack for a single input queue.
 * Given two arrays, both of unique elements. 
 * One represents the input queue and the other represents the output queue. 
 * Our task is to check if the given output is possible through stack permutation.
 */

const stackPermutations = (a, b) => {
    const stack = [];
    let operations = "";
    const output = [];
    let i = 0;
    let j = b.length - 1;
    while(j >= 0 && i < a.length) {
        if(b[j] === a[i]) {
            while(stack.length && stack[stack.length - 1] !== b[j + 1]) {
                operations += "X";
                output.push(stack.pop());
            }
            j--;
        }
        operations += "S";
        stack.push(a[i]);
        i++;
    }
    while(stack.length) {
        operations += "X";
        output.push(stack.pop());
    }
    if(output.toString() === b.toString())
        console.log(operations);
    else 
        console.log("not possible");
}

let a = [1, 2, 3, 4, 5, 6];
let b = [3, 2, 5, 6, 4, 1];
// b = [1, 5, 4, 6, 2, 3]
stackPermutations(a, b);