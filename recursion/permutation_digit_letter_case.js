const permutationDigitLetterCase = (input, output) => {
    if(input.length === 0) {
        console.log(output);
        return
    }
    if(input[0].match(/[0-9]/)) {
        output+=input[0];
        input=input.substr(1);
        return permutationDigitLetterCase(input, output);
    }
    const firstOutput = output + input[0].toLowerCase();
    const secondOutput = output + input[0].toUpperCase();
    input = input.substr(1);
    permutationDigitLetterCase(input, firstOutput);
    permutationDigitLetterCase(input, secondOutput);
}

permutationDigitLetterCase("a1B2", "");