
const printSubsets = (input, output) => {
    if(input.length === 0) {
        console.log(output);
        return;
    }
    const firstOutput = output;
    const secondOutput = output + input[0];
    input = input.substr(1);
    printSubsets(input, firstOutput);
    printSubsets(input, secondOutput);
}

printSubsets("abc","");