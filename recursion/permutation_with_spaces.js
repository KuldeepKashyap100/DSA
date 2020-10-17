const permutationWithSpaces = (input, output) => {
    if(input.length === 0) {
        console.log(output);
        return;
    }
    const firstOutput = output + input[0];
    const secondOutput = output+'_'+input[0];
    input = input.substr(1);
    permutationWithSpaces(input, firstOutput);
    permutationWithSpaces(input, secondOutput);
}

let input = "ABC";
let output = "";
output+=input[0];
input = input.substr(1);

permutationWithSpaces(input, output);