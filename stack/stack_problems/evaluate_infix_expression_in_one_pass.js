const Stack = require("../Stack").LinkedListStack;


const operators = ['+', '-', '/', '%', "*"];
const getPrecedence = (operator) => {
    switch(operator) {
        case '+': return 1;
        case '-': return 1;
        case '*': return 2;
        case '/': return 2;
        case '%': return 2;

    }
}

const evaluateInfixExpression = (expression) => {
    const operandStack = new Stack();
    const operatorStack = new Stack();

    for(let i=0;i<expression.length;i++) {
        if(operators.includes(expression[i])) {
            if(!operators.includes(operatorStack.getTop()))
                operatorStack.push(expression[i])
            else if(getPrecedence(expression[i]) > getPrecedence(operatorStack.getTop())) {
                operatorStack.push(expression[i]);
            }
            else {
                while(getPrecedence(expression[i]) <= getPrecedence(operatorStack.getTop())) {
                    let first = operandStack.pop();
                    let second = operandStack.pop();
                    operandStack.push(eval(second+operatorStack.pop()+first));
                }
                operatorStack.push(expression[i])
            }
        }
        else {
            operandStack.push(expression[i]);
        }
    }
    while(operatorStack.getTop()) {
        let first = operandStack.pop();
        let second = operandStack.pop();
        operandStack.push(eval(second+operatorStack.pop()+first));
    }
    console.log(operandStack, operatorStack);
    return operandStack.pop();
}

const expression1 = "3 % 2 + 8 % 4";
const result = evaluateInfixExpression(expression1.split(" ").join(""));
console.log(result);
