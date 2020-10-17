const generateAllBalancedParenthesis = (opened, closed, output) => {
    if(opened === 0 && closed ===0) {
        console.log(output);
        return;
    }
    if(opened) {
        const firstChoice = output + "(";
        generateAllBalancedParenthesis(opened-1, closed, firstChoice);
    }
    if(opened < closed) {
        const secondChoice = output + ")";
        generateAllBalancedParenthesis(opened, closed-1, secondChoice);
    }
}

n=3;
generateAllBalancedParenthesis(n, n, "");