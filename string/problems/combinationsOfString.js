const combinationsOfString = (str, left, output) => {
    for(let i = left; i < str.length; i++) {
        output += str[i];
        console.log(output);
        if(i < str.length - 1) {
            combinationsOfString(str, i + 1, output);
        }
        output = output.slice(0, -1);
    }
}

// const printSubsets = (input, output) => {
//     if(input.length === 0) {
//         console.log(output);
//         return;
//     }
//     const firstOutput = output;
//     const secondOutput = output + input[0];
//     input = input.substr(1);
//     printSubsets(input, firstOutput);
//     printSubsets(input, secondOutput);
// }

combinationsOfString("abc", 0, "");