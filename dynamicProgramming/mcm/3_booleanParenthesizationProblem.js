/**
 * https://www.youtube.com/watch?v=pGVguAcWX4g&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=40
 * 
 * Given a boolean expression with following symbols. 
 * Symbols
    'T' ---> true 
    'F' ---> false 
    And following operators filled between symbols 

    Operators
        &   ---> boolean AND
        |   ---> boolean OR
        ^   ---> boolean XOR 
    Count the number of ways we can parenthesize the expression 
    so that the value of expression evaluates to true. 
    Let the input be in form of two arrays one contains the symbols 
    (T and F) in order and other contains operators (&, | and ^}
 */
const booleanParentesizationProblem = (str, startIdx, endIdx, expectedBooleanValue) => {
    if(startIdx > endIdx) return 0;
    if(startIdx === endIdx) {
        if(expectedBooleanValue === true) return str[startIdx] === "T" ? 1 : 0;
        else return str[startIdx] === "F" ? 1 : 0;
    }

    let ans = 0;
    for(let k = startIdx + 1; k <= endIdx - 1; k = k + 2) {
        const leftTrue = booleanParentesizationProblem(str, startIdx, k - 1, true);
        const rightTrue = booleanParentesizationProblem(str, k + 1, endIdx, true);
        const leftFalse = booleanParentesizationProblem(str, startIdx, k - 1, false);
        const rightFalse = booleanParentesizationProblem(str, k + 1, endIdx, false);

        ans = ans + evaluateBooleanExpression(str[k], leftTrue, rightTrue, leftFalse, rightFalse, expectedBooleanValue);
    }

    return ans;
}

function evaluateBooleanExpression(operator, leftTrue, rightTrue, leftFalse, rightFalse, expectedBooleanValue) {
    let evaluatedExpression;
    if(operator === "&") {
        if(expectedBooleanValue === true)
            return leftTrue * rightTrue;
        else
            return leftTrue * rightFalse + leftFalse * rightTrue + leftFalse * rightFalse;
    }
    else if(operator === "|") {
        if(expectedBooleanValue === true)
            return leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;
        else
            return leftFalse * rightFalse;
    }
    else if(operator === "^") {
        if(expectedBooleanValue === true)
            return leftTrue * rightFalse + leftFalse * rightTrue;
        else
            return leftTrue * rightTrue + leftFalse * rightFalse;
    }
}

let expression = "T|F&T^F";
expression = "T|T&F^T"
expression = "T^F&T";

const noOfWays = booleanParentesizationProblem(expression, 0, expression.length - 1, true);
console.log(noOfWays);