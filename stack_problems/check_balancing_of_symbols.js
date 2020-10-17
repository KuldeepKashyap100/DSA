// time -> o(n) and space -> o(n)
const checkSymbolBalancing = (expression) => {
    const stack = [];
    const expressionLength = expression.length;
    let i = 0;
    while(i<expressionLength) {
        // console.log(stack, expression[i]);
        if(expression[i] === '(' || expression[i] === '{' || expression[i] === '[')
            stack.push(expression[i]);
        else if(expression[i] === ')' || expression[i] === '}' || expression[i] === ']') {
            const top = stack.pop();
            if(top === '(' && ')'!==expression[i])
                throw new Error("Expression not balanced.");
            if(top === '{' && '}'!==expression[i])
                throw new Error("Expression not balanced.");
            if(top === '[' && ']'!==expression[i])
                throw new Error("Expression not balanced.");
        }
        i++;
    }
    if(stack.length) 
        throw new Error("Expression not balanced.");

    console.log("Expression Balanced");
}

const expression1 = "(A+B)+(C+D)";
const expression2 = "((A+B)+(C+D)";
const expression3 = "(A+B)+([C+D])";
const expression4 = "((A+B)+[C+D]}";



checkSymbolBalancing(expression4);