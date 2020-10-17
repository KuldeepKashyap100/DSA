const Stack = require('../stack/Stack').LinkedListStack;
/**
 * Create an empty stack called opstack for keeping operators. Create an empty list for output.
 * Convert the input infix string to a list by using the string method split.
 * Scan the token list from left to right.
 * If the token is an operand, append it to the end of the output list.
 * If the token is a left parenthesis, push it on the opstack.
 * If the token is a right parenthesis, pop the opstack until the corresponding left parenthesis is removed. Append each operator to the end of the output list.
 *  If the token is an operator, *, /, +, or -, push it on the opstack. However, first remove any operators already on the opstack that have higher or equal precedence and append them to the output list.
 * When the input expression has been completely processed, check the opstack. Any operators still on the stack can be removed and appended to the end of the output list.
 */


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

const infixToPostFix = (expression) => {
    const stack = new Stack();
    let postFixExpression = "";
    for(let i=0;i<expression.length;i++) {
        if(expression[i] === '(')
            stack.push(expression[i]);
        else if(expression[i] === ')'){
            while(stack.getTop() !== '(') {
                top =  stack.pop();
                postFixExpression+=top;
            }
            stack.pop();
        }
        else if(operators.includes(expression[i])) {
            if(!operators.includes(stack.getTop())) {
                stack.push(expression[i]);
            }
            else if(getPrecedence(expression[i])>getPrecedence(stack.getTop())) {
                stack.push(expression[i]);
            }
            else {
                while(getPrecedence(expression[i])<=getPrecedence(stack.getTop()) || expression[i] === '('){
                    postFixExpression+=stack.pop();
                }
                stack.push(expression[i]);
            }
        }
        else {
            postFixExpression+=expression[i];
        }
    }
    while(stack.getTop()) {
        postFixExpression+=stack.pop();
    }
    return postFixExpression;
}

const evaluatePostFix = (expression) => {
    const stack = new Stack();
    for(let i=0;i<expression.length;i++) {
        if(operators.includes(expression[i])) {
            let first = stack.pop();
            let second = stack.pop();
            temp = eval(second+expression[i]+first);
            stack.push(temp);
        }
        else {
            stack.push(expression[i]);
        }
    }
    console.log(stack.pop());
}

const expression1 = "1 + 2 * 8 / 4";
const postFixExpression = infixToPostFix(expression1.split(" ").join(""));
evaluatePostFix(postFixExpression);
