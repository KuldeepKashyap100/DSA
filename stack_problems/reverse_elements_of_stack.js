const Stack = require("../stack/Stack").LinkedListStack;

const reverseStack = (stack) => {
    if(stack.isEmpty())
        return;
    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);
}

const insertAtBottom = (stack, data) => {
    if(stack.isEmpty()) {
        stack.push(data);
        return;
    }
    const top = stack.pop();
    insertAtBottom(stack, data);
    stack.push(top);
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.display();
console.log("");
reverseStack(stack);
stack.display();