const Stack = require("../stack/Stack").LinkedListStack;


const sort = (stack) => {
    if(stack.getTop() === -1)
        return;
    let poppedElement = stack.pop();
    sort(stack);
    insert(stack, poppedElement);
}

const insert = (stack, element) => {
    if(stack.getTop() === -1 || element >= stack.getTop()) {
        stack.push(element);
        return;
    }
    const poppedElement = stack.pop();
    insert(stack, element);
    stack.push(poppedElement);
}

let stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(8);
stack.push(1);
stack.push(4);

sort(stack);
stack.display();