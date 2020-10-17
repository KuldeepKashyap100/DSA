const Stack = require("../stack/Stack").LinkedListStack;

const deleteMiddleElement = (stack, middleElement) => {
    if(middleElement===1)
        return stack.pop();
    const poppedElement = stack.pop();
    deleteMiddleElement(stack, middleElement-1);
    stack.push(poppedElement);
}

let stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(8);
stack.push(1);
stack.push(4);

deleteMiddleElement(stack, Math.ceil(stack.size/2));
stack.display();