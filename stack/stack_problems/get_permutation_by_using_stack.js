const Stack = require("../stack/Stack").LinkedListStack;

const getPermutation = (inputArray, result) => {
    let stack = new Stack();
    let steps = "";
    let pushIndex = 0;
    for(let i of result) {
        console.log(i);
        if(stack.getTop() != i && inputArray.length>pushIndex) {
            stack.push(inputArray[pushIndex]);
            steps+='S'
            pushIndex++;
        }
        else if (stack.getTop() == i) {
            stack.pop();
            steps+="X";
        }
    }
    return steps;
}

let result = getPermutation([1, 2, 3, 4, 5, 6], "325641");
console.log(result);