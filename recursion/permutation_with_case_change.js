const permutationWithCaseChange = (input, output) => {
    if(input.length === 0){
        console.log(output);
        return
    }
    const firstOutput = output + input[0];
    const secondOutput = output + input[0].toUpperCase();
    input = input.substr(1);
    permutationWithCaseChange(input, firstOutput);
    permutationWithCaseChange(input, secondOutput);
}

permutationWithCaseChange("ab", "");